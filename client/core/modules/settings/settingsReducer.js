import { Map } from 'immutable';
import { constants } from "../../constants";
import {settings as settingsConst} from "../../../core/constants";

const initialState = Map({
  backgroundImage: settingsConst.backgroundImage,
});

const settings = (state = initialState, action) => {
  switch (action.type) {
    case constants.settings.setBackground:
      return state.set('backgroundImage', action.payload.backgroundImage);

    case constants.settings.unsetBackground:
      return state.set('backgroundImage', initialState.get('backgroundImage'));

    default:
      return state;
  }
};

export default settings;
