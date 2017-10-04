import React from 'react';

export default function Banner(props) {
  return (
    <div className="bannerWrap">
      {
        props.recommendedSku === props.sku
        && <div className="banner">Recommended</div>
      }
    </div>
  )
};
