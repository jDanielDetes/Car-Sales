import React from 'react';
import {connect} from 'react-redux'

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  console.log(props)
  return (
    <div className="content">
      <h6>Added features:</h6>
            <AddedFeature key={props.parts.id} name={props.parts.name} />
        <p>You can purchase items from the store.</p>
        </div>
        )
      
   
  
};

const mapStateToProps = (state) =>{
  
  return {parts:state.added}
}

export default connect(mapStateToProps)(AddedFeatures)
