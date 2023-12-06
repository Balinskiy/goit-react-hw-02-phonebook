import React from 'react';
import { Filter } from 'components/Filter/Filter.styled';

const FilterComponent = ({ onChange, value }) => (
  <Filter
    onChange={onChange}
    value={value}
    type="text"
    name="filter"
    placeholder="Find contact name"
  />
);

export default FilterComponent;
