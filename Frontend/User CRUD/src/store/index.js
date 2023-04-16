import { createStore } from "redux";

state = {
    user: {
        fname: "",
        lname: "",
        age: 0,
        gender: "",
        email: "",
        files: null
    }
}

export function getInitialState(state, action) {
    return {

    }
}


export const store = createStore(

);