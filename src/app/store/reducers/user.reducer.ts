import { initialUserState, UserState } from "../state/users.state";
import { UserActions, EUserActions } from "../actions/user.actions";


export const userReducers = (
  state = initialUserState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case EUserActions.GetUserSuccess:
      return {
        ...state,
        selectedUser: action.payload
      };

    default:
      return state;
  }
};


