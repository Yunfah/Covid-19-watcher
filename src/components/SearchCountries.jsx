import React from 'react';
import './styles.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

function SearchCountries() {

  return (

    <div className="SearchCountries">


<Form>
  <Form.Group controlId="rating">
          <h4 className="white-h">Search country</h4>
          <Form.Control as="select" required>
            <option disabled value="default">Select country</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
              Select
            </Form.Control.Feedback>
        </Form.Group>
</Form>
    </div>
    );
}

export default SearchCountries;
