import React from "react";
import { connect } from "react-redux";

const Smurfs = (props) => {
  return (
    <div className="smurfs">
      {props.state.smurfs.map((smurf, index) => {
        return (
          <div>
            Smurf number {index} is named {smurf.name}, is {smurf.age} years
            old, and is {smurf.height} tall!
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps, {})(Smurfs);
