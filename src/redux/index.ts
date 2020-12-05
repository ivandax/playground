import { combineReducers } from "redux";

import headerToggleReducer from "src/redux/headerToggleReducer";

const rootReducers = combineReducers({
  headerToggle: headerToggleReducer,
});

export default rootReducers;
