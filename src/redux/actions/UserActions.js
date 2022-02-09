import { UserActionTypes } from "../constants/UserTypes";

export const setCurrentUser = (user) => ({
    
        type: UserActionTypes.SET_CURRENT_USER,
        payload: user
    
    
});
