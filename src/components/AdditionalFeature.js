import React from 'react';

import { connect } from 'react-redux';

const AdditionalFeature = props => {
  
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
    
      {props.name} (+{props.price})
    </li>
  );
};

export default AdditionalFeature
