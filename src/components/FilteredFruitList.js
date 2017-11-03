import React, { Component } from 'react';

const FilteredFruitList = ({ item, filter}) => {
  const list = !filter || filter === 'all' ? item : item.filter(i => i.fruit_type === filter);

  return (
    <ul className="fruit-list">
      {list.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  );
}

export default FilteredFruitList;
