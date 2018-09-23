import React from 'react';

const LevelLabel = ({ level }) => (
  <span
    className="location-tag"
    style={
      level === 'Municipal'
        ? { color: 'red', borderColor: 'red' }
        : level === 'Provincial'
          ? { color: 'purple', borderColor: 'purple' }
          : level === 'Federal'
            ? { color: 'orange', borderColor: 'orange' }
            : {}
    }
  >
    {level ? level.toUpperCase() : null}
  </span>
);

export default LevelLabel;
