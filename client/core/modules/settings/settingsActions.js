import {constants} from "../../constants";

export const setBackground = (backgroundImage) => {
  return {
    type: constants.settings.setBackground,
    payload: {
      backgroundImage
    }
  }
};

export const unsetBackground = () => {
  return {
    type: constants.settings.unsetBackground,
    payload: {}
  }
};