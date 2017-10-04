import React from 'react';

export default function Feature(props) {
  const highlightedClass = (
    !props.recommendedSku
    || props.recommendedSku === props.sku
    ? ' highlighted'
    : ''
  );

  return (
    <div className={`feature${highlightedClass}`}>
      Features Component
    </div>
  )
};
