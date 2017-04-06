import React from 'react';


export default ({term, data, update}) =>{

      const playerSearch = e =>{
      const value = e.target.value.toLowerCase();
      const activeness = data.findIndex(i => i.name==value);
      const filter = data.filter(player => {
        return player.name.toLowerCase().includes(value);
      });

      update({
        data: filter,
        active2: activeness,
        term: value
      });
    };

    return(
      <div>
        <input className="playersInput"
          value={term}
          type="text"
          placeholder="Enter player's name"
          onBlur = {playerSearch}
          />
      </div>
    );
};
