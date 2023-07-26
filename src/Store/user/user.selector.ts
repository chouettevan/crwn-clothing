import {UserState} from './user.reducer';
import { RootState } from '../store'
import {createSelector} from 'reselect';
export const selectUserState = (state:RootState):UserState => state.user

export const userSelector = createSelector(
	[selectUserState],
	userState => userState.currentUser
)