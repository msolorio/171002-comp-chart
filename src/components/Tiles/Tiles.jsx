import React from 'react';
import './Tiles.css';

export default function Tiles(props) {
  return (
    <div className="tiles">
      {props.children}
    </div>
  );
}
