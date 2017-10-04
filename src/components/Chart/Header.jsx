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

  return (
    <div className={`header`}>
      <div className={`headerBody${highlightedClass}`}
        onClick={handleProductClick}>Header Body</div>
    </div>
  )
}
