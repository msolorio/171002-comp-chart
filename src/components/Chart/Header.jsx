import React from 'react';

export default function Product(props) {
  const highlightedClass = (
    !props.recommendedSku
    || props.highlighted.indexOf(props.sku) > -1
    ? ' highlighted'
    : ''
  );

  function handleProductClick() {
    props.handleProductClick(props.sku);
  }

  function handleProductMouseEnter() {
    props.handleProductMouseEnter(props.sku);
  }

  function handleProductMouseLeave() {
    props.handleProductMouseLeave(props.sku);
  }

  return (
    <div className={`header`}>
      <div className={`headerBody${highlightedClass}`}
        onClick={handleProductClick}
        onMouseEnter={handleProductMouseEnter}
        onMouseLeave={handleProductMouseLeave}>Header Body</div>
    </div>
  )
}
