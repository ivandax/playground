interface Action {
  type: string,
}

type HeaderToggleAction = Action;

export type AllActions = HeaderToggleAction

const showHeader = () => {
  return {type: 'show'};
}

const hideHeader = () => {
  return {type: 'hide'};
}

export {
  showHeader,
  hideHeader,
}