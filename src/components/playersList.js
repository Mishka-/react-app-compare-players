import React from 'react';
import PlayersData from './playersData';

export default ({ data, update}) => {
  if (!data) { return (<p>Loading...</p>); }

  const players = data.map((player, index) => {
      return (<PlayersData player={player} index={index} key={`player-${index}`} update={update} />);
    });

  return (
    <table className="playersList">
      <tbody>
        {players}
      </tbody>
    </table>
  );
};
