import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Star({ rating }) {
  const [score] = useState(rating);

  return (
    <div>
      <p>
        Score:
        {score}
      </p>
    </div>
  );
}

Star.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Star;
