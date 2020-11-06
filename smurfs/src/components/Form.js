import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";

const Form = (props) => {

//   const [values, setValues] = useState({
//     name: "",
//     age: "",
//     height: "",
//   });

//   const onChange = (evt) => {
//     setValues({
//         ...values,
//         [evt.target.name]: evt.target.value,
//     })
//   };

//   const onSubmit = (evt) => {
//       evt.preventDefault()
//       console.log(`submitted with this value as name: ${values.name}`)
//       axios.post('http://localhost:3333/smurfs', values)
//       .then(res => {
//           console.log(res)
//           setValues({
//               name: "",
//               age: "",
//               height: ""
//           })
//         })
//   }

const onSubmit = () => {
    console.log("submitted")
}

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="inputs">
        <label>
          Name
          <input
            value={props.state.values.name}
            // onChange={onChange}
            name="name"
            type="text"
          />
        </label>
        <label>
          Age
          <input
            value={props.state.values.age}
            // onChange={onChange}
            name="age"
            type="text"
          />
        </label>
        <label>
          Height
          <input
            value={props.state.values.height}
            // onChange={onChange}
            name="height"
            type="text"
          />
        </label>
      </div>
      <div className="submit">
        <button>Submit</button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
    return { state };
  };

export default connect(mapStateToProps, {}) (Form);
