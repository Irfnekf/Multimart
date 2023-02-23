import React from 'react';

import { motion } from 'framer-motion';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../styles/product-card.css';
import { memo } from 'react';

const ProductCard = ({ item }) => {
  const { imgUrl, id, productName, price, category } = item;

  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product__item">
        <div className="product__img">
          <motion.img whileHover={{ scale: 0.9 }} src={imgUrl} alt="" />
          <div className="p-2 product__info">
            <h3 className="product__name">
              <Link to={`/shop/${id}`}>{productName}</Link>
            </h3>
            <span>{category}</span>
          </div>
          <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
            <span className="price">${price}</span>
            <motion.span whileTap={{ scale: 1.2 }}>
              <i className="ri-add-line"></i>
            </motion.span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default memo(ProductCard);

ProductCard.propTypes = {
  item: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
