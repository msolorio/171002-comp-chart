import React from 'react';

export default function Product(props) {
  const highlightedClass = (
    !props.recommendedSku
    || props.recommendedSku === props.sku
    ? ' highlighted'
    : ''
  );

  return (
    <div className={`header${highlightedClass}`}>
      Header Component
    </div>
  )
}
