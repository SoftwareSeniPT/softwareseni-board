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
      Object.keys(board.components).map((name, i) => {
        this.state[key][i] = {};
        const components = board.components[name];
        components.map((component, index) => {
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
    const boardPromises = Object.keys(board.components).map((key) => {
      const name = board.components[key];
      const promises = name.map((component) => component.resolver());
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
          }}
          anchors={boards.map((board, key) => (`board-${key}`))}>
          {boards.map((board, key) => (
            <Section key={key}>
              <div className={`board board-${key}`}>
                <Container>
                  {Object.keys(board.components).map((index, num) => {
                    const component = board.components[index];
                    return (
                      <BlockWrapper type={index} key={num}>
                        {component.map((compo, i) => (
                          <Block title={this.checkIfDataIsNull(key) ? null : compo.title} key={i}>
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
      </div>
    );
  }
}

export default App;
