import React from 'react';

export default function Product(props) {
  const highlightedClass = (
    !props.recommendedSku
    || props.recommendedSku === props.sku
    ? ' highlighted'
    : ''
  );

  return (
    <div className={`header`}>
      <div className="bannerWrap">
        {
          props.recommendedSku === props.sku
          && <div className="banner">Recommended</div>
        }
      </div>
      <div className={`headerBody${highlightedClass}`}>Header Body</div>
    </div>
  )
}
