import React, { Component } from 'react';
// import { SectionsContainer, Section } from 'react-fullpage';
import { Fullpage, Slide, HorizontalSlider, changeFullpageSlide } from 'fullpage-react';
import Container from '../../components/container';
import BlockWrapper from '../../components/block-wrapper';
import Block from '../../components/block';
import boards from '../../config/boards';
import Loading from '../../components/loading';
import SSLogo from '../../components/ss-logo';
import config from '../../config/global';
import './style.css';

// const prevSlide = changeFullpageSlide.bind(null, 'PREV');
// const nextSlide = changeFullpageSlide.bind(null, 'NEXT');
// const backToTop = changeFullpageSlide.bind(null, 0);

const fullPageOptions = {
  scrollSensitivity: 2,
  touchSensitivity: 2,
  scrollSpeed: 500,
  resetSlides: true,
  hideScrollBars: true,
  onSlideChangeStart: () => {},
  onSlideChangeEnd: () => {},
};

const horizontalSliderProps = {
  name: 'horizontalSlider1',
  scrollSpeed: 500,
  infinite: true,
  resetSlides: false,
  scrollSensitivity: 2,
  touchSensitivity: 2,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.activeBoard = 0;
    this.totalBoard = boards.length;
    const boardObject = {};
    // Bootstrapping default value
    boards.map((board, key) => {
      boardObject[key] = {};
      board.components.map((boardGroup, i) => {
        boardObject[key][i] = {};
        const boardGroupBlock = boardGroup.blocks;
        boardGroupBlock.map((component, index) => {
          boardObject[key][i][index] = {
            data: null,
          };
        });
      });
      return board;
    });

    this.state = {
      boards: boardObject,
      activeBoardName: boards[0].name,
    };

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
    const boardObject = {};
    Object.keys(this.state.boards).map((stateKey) => {
      if (parseInt(stateKey, 10) !== activeBoardIndex) {
        const resetState = {};
        Object.keys(this.state.boards[stateKey]).map((sectionKey) => {
          resetState[sectionKey] = {};
          Object.keys(this.state.boards[stateKey][sectionKey]).map((boardKey) => {
            resetState[sectionKey][boardKey] = {
              data: null,
            };
            return boardKey;
          });
          return sectionKey;
        });
        boardObject[stateKey] = resetState;
      }
      return stateKey;
    });
    this.setState({ boards: Object.assign({}, this.state.boards, boardObject) });
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
          this.setState({ boards: Object.assign({}, this.state.boards, { [boardIndex]: resultObject }) }, callback);
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
    const board = this.state.boards[boardIndex];
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
        <Fullpage {...fullPageOptions} >
          {boards.map((board, key) => (
            <Slide key={key}>
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
                            ) : compo.component(this.state.boards[key][num][i].data)}
                          </Block>
                        ))}
                      </BlockWrapper>
                    );
                  })}
                </Container>
              </div>
            </Slide>
          ))}
        </Fullpage>

        {this.state.activeBoardName && (
          <div className="board-name">{this.state.activeBoardName}</div>
        )}

        <div className="company-logo">
          <SSLogo fill="rgba(255, 255, 255, 0.48)" />
        </div>
      </div>
    );
  }
}

export default App;
