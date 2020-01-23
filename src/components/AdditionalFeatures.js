import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {connect} from 'react-redux'
import {addFeature} from '../actions/addAction'

 class AdditionalFeatures extends React.Component {

   renderList=()=>{
    return this.props.features.map((features)=>{
      console.log(features)
      return(
<div className="content">
      <h4>Additional Features</h4>
      
      <AdditionalFeature id={features.id} name={features.name} price={features.price}/>
      <button 
      className="button"
      onClick={()=>this.props.addFeature(features)}
      >Add</button>
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
console.log(state)
  return {features: state.features}
  }


export default connect(mapStateToProps,{addFeature})(AdditionalFeatures);