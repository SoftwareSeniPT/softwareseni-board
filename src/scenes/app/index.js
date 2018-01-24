import React, { Component } from 'react';
// import { SectionsContainer, Section } from 'react-fullpage';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from '../../components/container';
import BlockWrapper from '../../components/block-wrapper';
import Block from '../../components/block';
import boards from '../../config/boards';
import Loading from '../../components/loading';
import SSLogo from '../../components/ss-logo';
import config from '../../config/global';
import './style.css';

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  swipe: true,
  swipeToSlide: true,
  autoplay: config.autoSlide,
  autoplaySpeed: config.timeoutDuration,
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
    this.nextSlide = this.nextSlide.bind(this);
  }
  componentDidMount() {
    this.loadBoard(0);

    if (config.autoSlide) {
      setInterval(() => {
        this.nextSlide();
      }, config.timeoutDuration);
    }
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
      })
      .catch((error) => console.log(error, 'error'));
  }
  loadBoard(boardIndex) {
    this.loadBoardData(boardIndex);
    this.resetBoardDataExcept(boardIndex);
  }
  checkIfDataIsNull(boardIndex) {
    const board = this.state.boards[boardIndex];
    const nullComponents = Object.keys(board).filter((key) => {
      const data = board[key];
      const filteredData = Object.keys(data).filter((i) => {
        const dat = data[i];
        if (!dat.data && dat.data !== 0) return true;
        return false;
      });
      if (filteredData.length) return true;
      return false;
    });

    if (nullComponents.length) return true;
    return false;
  }
  nextSlide() {
    this.slider.slickNext();
  }
  render() {
    return (
      <div className="app">
        <Slider
          {...sliderSettings}
          ref={(c) => (this.slider = c)}
          afterChange={(boardIndex) => {
            // console.log({ before, after })
            this.loadBoard(boardIndex);
            const { name } = boards[boardIndex];
            this.setState({ activeBoardName: name });
          }}>
          {boards.map((board, key) => (
            <div className="slider-section" key={key}>
              <div className={`board board-${key}`}>
                <Container>
                  {board.components.map((boardGroup, num) => {
                    return (
                      <BlockWrapper styles={boardGroup.styles} columnWidth={boardGroup.columns} key={num}>
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
            </div>
          ))}
        </Slider>

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
