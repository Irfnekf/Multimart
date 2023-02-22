import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

import serviceData from "../assets/data/serviceData";

import "./services.css";

const items = serviceData.map(({ icon, title, subtitle, bg }) => (
  <Col lg="3" md="4" key={title}>
    <motion.div
      className="service__item"
      style={{ background: bg }}
      whileHover={{ scale: 1.1 }}
      whileFocus={{ scale: 1.1 }}
    >
      <span>
        <i className={icon}></i>
      </span>
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </motion.div>
  </Col>
));

const Services = () => {
  return (
    <section className="services">
      <Container>
        <Row>{items}</Row>
      </Container>
    </section>
  );
};

export default Services;
