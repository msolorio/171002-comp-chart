import React, { Component } from 'react';
import Tiles from './Tiles/Tiles.jsx';
import Tile from './Tiles/Tile.jsx';
import Chart from './Chart/Chart.jsx';
import Product from './Chart/Product.jsx';
import tileData from './Tiles/tilesData';
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

  handleTileClick(sku) {
    this.setState((prevState) => {
      let newActiveTiles;

      if (prevState.activeTiles.indexOf(sku) > -1) {
        newActiveTiles = prevState.activeTiles.filter(tile => tile !== sku);
      } else {
        newActiveTiles = prevState.activeTiles.concat([sku]);
      }

      return { activeTiles: newActiveTiles };
    });
  }

  render() {
    const recommendedSku = calculateSku(this.state.activeTiles, skuRanking);

    return (
      <div className="App">

        <Tiles>
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
        </Tiles>

        <Chart recommendedSku={recommendedSku}>
          <Product />
        </Chart>
      </div>
    );
  }
}

export default App;
