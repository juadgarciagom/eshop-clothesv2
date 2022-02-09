//The first is made the initial state this for larger projects is made in a folder of constants with action types or
//enviroment constants or API constants.... etc

import { UserActionTypes } from "../constants/UserTypes";

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            
            return {
                ...state,
                currentUser: action.payload
            }
    
        default:
            return state;
    }
}

export default userReducer;

