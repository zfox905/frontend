import { SHOW_TOAST } from "../actions/types";


const initialState = { }

export default function (state = initialState, action) {
    const { type, payload } = action;
    
    switch (type) {
      case SHOW_TOAST:
          
        return {
          ...state,
          message: payload
          
        };
      default:
      return state
    }
}