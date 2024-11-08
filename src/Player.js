import React from 'react';
import Card from 'react-bootstrap/Card';


function Player({ name, club, nationality, jersy_no, age, imageUrl }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {club} <br />
          <strong>Nationality:</strong> {nationality} <br />
          <strong>Jersey Number:</strong> {jersy_no} <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

// Define default props
Player.defaultProps = {
  name: "Unknown Player",
  club: "Unknown Team",
  nationality: "Unknown",
  jersy_no: 0,
  age: 0,
  imageUrl: "https://placeholder-url.com/player-image.jpg",
};

export default Player;
