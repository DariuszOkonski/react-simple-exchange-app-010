import React from 'react';

const Cash = (props) => {
  const { name, ratio, title } = props.curriency;
  const displayAmount = ((props.quantity * props.price) / ratio).toFixed(2);

  return (
    <p>{title} {displayAmount} {name}</p>
  );
}

export default Cash;