// import actions
// import axios from "axios";
// import React, {useState} from "react";
import {FORM_CHANGE} from "../actions"
//change





export const initialState = {
    smurfs: [{"name":"Brainey","age":200,"height":"5cm","id":0}],
    values: {name: "", age: "", height: ""},
};

export function reducer (state = initialState, action) {
    switch(action.type) {
        case FORM_CHANGE:
            return {
                ...state,
                values: ...values,

            }
    }
}