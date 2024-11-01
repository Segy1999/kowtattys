import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#C89D7C' }} className="text-2xl text-white py-4 montserrat">
      <Container>
        <Row>
          <Col>
            <p>&copy; {new Date().getFullYear()} Kow Tattys</p>
          </Col>
          <Col className="text-right">
            <Link to="/about-us" className="text-white hover:text-gray-300 transition duration-300">
              About Us
            </Link>{' '}
            |{' '}
            <Link to="/policies" className="text-white hover:text-gray-300 transition duration-300">
              Policies
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
