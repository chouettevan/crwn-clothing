import { Middleware } from 'redux';
import { RootState } from '../store';

export const loggerMiddleware:Middleware<{},RootState> = store => next => action => {
	if (!action.type) return next(action);
	const { type,payload } = action;
	console.log('type: ',type)
	console.log('payload: ',payload)
	console.log('state: ',store.getState())
	next(action);
	console.log('new state: ',store.getState())
}