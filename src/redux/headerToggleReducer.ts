import { AllActions } from "src/redux/actions";

export interface HeaderToggleState {
  className: string;
}

const initialState: HeaderToggleState = {className: ""};

function headerToggleReducer(state = initialState, action: AllActions) {
  switch (action.type) {
    case "show":
      return {className: "show"};
    case "hide":
      return {className: ""};
    default:
      return state;
  }
}

export default headerToggleReducer;
