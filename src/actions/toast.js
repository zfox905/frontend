import { SHOW_TOAST } from "./types";

export const showToast = (message) =>  ({
    
  type: SHOW_TOAST,
  payload: message,
});