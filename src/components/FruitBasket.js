import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({ filters, fruit, onUpdateFilter, selectedFilter}) =>
      <div className="fruit-basket">
        <Filter
        filters={filters}
        handleChange={onUpdateFilter} />
        <FilteredFruitList
          fruit={fruit}
          filter={selectedFilter} />
      </div>

      FruitBasket.defaultProps = {
      fruit: [],
      filters: [],
      selectedFilter: null,
      updateFilterCallback: () => {}
    };



export default FruitBasket;
