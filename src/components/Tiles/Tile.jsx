import React from 'react';

export default function Tile(props) {

  function handleTileClick() {
    props.handleTileClick(props.highestRecommendedSku);
  }

  const activeClass = props.activeTiles.indexOf(props.highestRecommendedSku) > -1 ? ' tile-active' : '';

  return (
    <div className={`tile${activeClass}`}
      onClick={handleTileClick}>
      {props.text}
    </div>
  );
}
