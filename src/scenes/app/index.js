import React, { Component } from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import Container from '../../components/container';
import BlockWrapper from '../../components/block-wrapper';
import Block from '../../components/block';
import boards from '../../config/boards';
import Loading from '../../components/loading';
import config from '../../config/global';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.activeBoard = 0;
    this.totalBoard = boards.length;
    this.state = {};
    // Bootstrapping default value
    boards.map((board, key) => {
      this.state[key] = {};
      board.components.map((boardGroup, i) => {
        this.state[key][i] = {};
        const boardGroupBlock = boardGroup.blocks;
        boardGroupBlock.map((component, index) => {
          this.state[key][i][index] = {
            data: null,
          };
        });
      });
      return board;
    });

    this.checkIfDataIsNull = this.checkIfDataIsNull.bind(this);
    this.resetBoardDataExcept = this.resetBoardDataExcept.bind(this);
  }
  componentDidMount() {
    // Loading board 1
    this.loadBoard(0);
    if (config.autoSlide) {
      this.autoSlide();
    }
  }
  autoSlide() {
    setInterval(() => {
      let nextBoard;
      if (this.activeBoard >= (this.totalBoard - 1)) {
        nextBoard = 0;
      } else {
        nextBoard = this.activeBoard + 1;
      }
      // Change board
      window.location.hash = `#board-${nextBoard}`;
    }, config.timeoutDuration);
  }
  resetBoardDataExcept(activeBoardIndex) {
    Object.keys(this.state).map((stateKey) => {
      if (parseInt(stateKey, 10) !== activeBoardIndex) {
        const resetState = {};
        Object.keys(this.state[stateKey]).map((sectionKey) => {
          resetState[sectionKey] = {};
          Object.keys(this.state[stateKey][sectionKey]).map((boardKey) => {
            resetState[sectionKey][boardKey] = {
              data: null,
            };
            return boardKey;
          });
          return sectionKey;
        });

        this.setState({ [stateKey]: resetState });
      }
      return stateKey;
    });
  }
  loadBoardData(boardIndex, callback) {
    const board = boards[boardIndex];
    if (!boards) {
      console.log(`Board ${boardIndex} not found`);
      return false;
    }
    const boardPromises = board.components.map((boardGroup) => {
      const promises = boardGroup.blocks.map((component) => component.resolver());
      return Promise.all(promises);
    });

    Promise.all(boardPromises)
      .then((result) => {
        if (result.length) {
          const resultObject = {};
          result.map((res, key) => {
            resultObject[key] = {};
            res.map((data, i) => {
              resultObject[key][i] = {
                data,
              };
            });
          });
          this.setState({ [boardIndex]: resultObject }, callback);
        }
      });
  }
  loadBoard(boardIndex) {
    this.loadBoardData(boardIndex, () => {
      this.activeBoard = boardIndex;
      this.resetBoardDataExcept(boardIndex);
    });
  }
  checkIfDataIsNull(boardIndex) {
    const board = this.state[boardIndex];
    const nullComponents = Object.keys(board).filter((key) => {
      const data = board[key];
      const filteredData = Object.keys(data).filter((i) => {
        const dat = data[i];
        if (!dat.data) return true;
        return false;
      });
      if (filteredData.length) return true;
      return false;
    });

    if (nullComponents.length) return true;
    return false;
  }
  render() {
    return (
      <div className="app">
        <SectionsContainer
          navigation={false}
          scrollCallback={(data) => {
            const { activeSection } = data;
            this.loadBoard(activeSection);
            // Get board name
            // const { name } = boards[activeSection];
            // console.log(name, 'name');
            // this.setState({ activeBoardName: name });
          }}
          anchors={boards.map((board, key) => (`board-${key}`))}>
          {boards.map((board, key) => (
            <Section key={key}>
              <div className={`board board-${key}`}>
                <Container>
                  {board.components.map((boardGroup, num) => {
                    return (
                      <BlockWrapper columnWidth={boardGroup.columns} key={num}>
                        {boardGroup.blocks.map((compo, i) => (
                          <Block
                            type={compo.type}
                            title={this.checkIfDataIsNull(key) ? null : compo.title} key={i}>
                            {this.checkIfDataIsNull(key) ? (
                              <div className="board-loading">
                                <Loading />
                              </div>
                            ) : compo.component(this.state[key][num][i].data)}
                          </Block>
                        ))}
                      </BlockWrapper>
                    );
                  })}
                </Container>
              </div>
            </Section>
          ))}
        </SectionsContainer>

        {this.state.activeBoardName && (
          <div className="board-name">{this.state.activeBoardName}</div>
        )}
      </div>
    );
  }
}

export default App;
