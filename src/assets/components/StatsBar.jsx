import React from 'react';

const StatsBar = ({ title, value, typeClass }) => {
  const barFill = Math.round((value / 150) * 100);

  return (
    <div className="stats-bar">
      <h3 className="heading-tertiary">{title}</h3>
      <p className="bar-value">{`${value}/150`}</p>
      <div className="bar-container">
        <span
          className={`bar-fill ${typeClass}`}
          style={{ width: `${barFill}%` }}
        ></span>
      </div>
    </div>
  );
};

export default StatsBar;
