import { game } from '../index';

const appState = (state = game, action) => {
  switch (action.type) {
    case 'START_GAME': {
      return {
        ...state,
        gameStarted: action.value
      }
    }
    default: {
      return state
    }
  }
}
export default appState;