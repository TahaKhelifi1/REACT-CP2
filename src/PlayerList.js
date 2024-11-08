import React from 'react';
import Player from './Player';
import players from './players';

function PlayerList() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
}

export default PlayerList;
