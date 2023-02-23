import React from 'react';
import ProductCard from './ProductCard';
import { memo } from 'react';
import PropTypes from 'prop-types';

const ProductsList = ({ data }) => {
  return (
    <>
      {data?.map(item => (
        <ProductCard item={item} key={item.id} />
      ))}
    </>
  );
};

export default memo(ProductsList);

ProductsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
