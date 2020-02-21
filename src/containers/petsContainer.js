import {connect} from 'react-redux';
import PetList from '../components/PetList';
import {getPets} from '../actions/pets-actions';
import React from 'react';


function PetsContainer(props) {
// console.log("TCL: PetsContainer -> props", props.getPets())

  return (
    <PetList {...props}/>
  );
}

const mapDispatchToProps = dispatch => ({
  getPets: () => dispatch(getPets()),
});
const mapStateToProps = (state) => {
  console.log("TCL: mapStateToProps -> state", state)
  return {
    petsInfo: state.petsInfo.data,
    isLoading: state.petsInfo.isLoading,
    error: ""
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PetsContainer);
