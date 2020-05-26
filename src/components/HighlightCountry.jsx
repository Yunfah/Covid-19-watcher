import React from 'react';
import './styles.css';
import Card from 'react-bootstrap/Card';

function HighlightCountry() {

  return (
<div className="HighlightCountry">

<Card>
    <Card.Body>
      <Card.Title>Country</Card.Title>
      <Card.Text>
        Highlighted country
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

</div>
);
}

export default HighlightCountry;
