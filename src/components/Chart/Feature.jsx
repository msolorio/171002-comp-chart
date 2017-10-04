import React from 'react';

export default function Feature(props) {
  const highlightedClass = (
    !props.recommendedSku
    || props.highlighted.indexOf(props.sku) > -1
    ? ' highlighted'
    : ''
  );

  function handleProductClick() {
    props.handleProductClick(props.sku);
  }

  return (
    <div className={`feature${highlightedClass}`}
      onClick={handleProductClick}>
      Features Component
    </div>
  )
};
