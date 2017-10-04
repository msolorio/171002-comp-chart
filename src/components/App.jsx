import React, { Component } from 'react';
import Tiles from './Tiles/Tiles.jsx';
import Tile from './Tiles/Tile.jsx';
import Chart from './Chart/Chart.jsx';
import Header from './Chart/Header.jsx';
import Feature from './Chart/Feature.jsx';
import Slider from './Chart/Slider.jsx';
import tileData from './Tiles/tilesData';
import chartData from './Chart/chartData';
import calculateSku from '../utilities/calculateSku';
import skuRanking from '../utilities/skuRanking';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTiles: []
    };

    this.handleTileClick = this.handleTileClick.bind(this);
  }

  handleTileClick(highestRecommendedSku) {
    this.setState((prevState) => {
      let newActiveTiles;

      if (prevState.activeTiles.indexOf(highestRecommendedSku) > -1) {
        newActiveTiles = prevState.activeTiles.filter(tile => tile !== highestRecommendedSku);
      } else {
        newActiveTiles = prevState.activeTiles.concat([highestRecommendedSku]);
      }

      return { activeTiles: newActiveTiles };
    });
  }

  render() {
    const recommendedSku = calculateSku(this.state.activeTiles, skuRanking);

    return (
      <div className="app">
        <Tiles>
          <div className="row">
            {
              tileData.tiles.map((tile, index) => {
                return (
                  <div className="col"
                    key={index}>
                    <Tile {...tile}
                      handleTileClick={this.handleTileClick}
                      activeTiles={this.state.activeTiles} />
                  </div>
                );
              })
            }
          </div>
        </Tiles>

        <Chart>

          <div className="row">
            {
              chartData.products.map((product, index) => {
                return (
                  <div className="col" key={index}>
                    <Header sku={product.sku}
                      recommendedSku={recommendedSku} />
                  </div>
                );
              })
            }
          </div>

          <Slider />

          <div className="row">
            {
              chartData.products.map((product, index) => {
                return (
                  <div className="col" key={index}>
                    <Feature sku={product.sku}
                      recommendedSku={recommendedSku} />
                  </div>
                );
              })
            }
          </div>

        </Chart>
      </div>
    );
  }
}

export default App;
