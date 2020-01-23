import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {connect} from 'react-redux'

 class AdditionalFeatures extends React.Component {

   renderList=()=>{
    return this.props.features.map((features)=>{
      console.log(features)
      return(
<div className="content">
      <h4>Additional Features</h4>
      <AdditionalFeature key={features.id} name={features.name} price={features.price}/>
        </div>
      )
    })

 
 }
 render(){
  return (
    <div>{this.renderList()}</div>
);
};
}

const mapStateToProps=(state)=>{
  
  return {features: state.features}
  }


export default connect(mapStateToProps)(AdditionalFeatures);