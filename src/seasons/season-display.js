import React from 'react';
import './season-display.css';

const seasonConfig = {
  summer: {
    text: 'Let\'s hit the beach',
    icon: 'sun',
  },
  winter: {
    text: 'Burr, it\'s chilly',
    icon: 'snowflake',
  },
};

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? 'summer' : 'winter';
  } else {
    return latitude > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = ({ latitude }) => {
  const season = getSeason(latitude, new Date().getMonth());
  // const isWinter = season === 'winter';
  // const text = isWinter ? 'Burr, it\'s chilly' : 'Let hit the beach';
  // const icon = isWinter ? 'snowflake' : 'sun';
  
  const {text, icon} = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${icon} icon`} />
      <h1>
        {text}
      </h1>
      <i className={`icon-right massive ${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
