import React, { useReducer } from 'react';
import UserProfile from '../../components/user-profile/UserProfile.js';
import get from '../../services/apiService.js';
import { useParams } from 'react-router-dom';
import endpoints from '../../config/endpoints.js';

const SWITCH_AUTH_TYPE = "SWITCH_AUTH_TYPE"
const CLEAR_ANIMATION_CONTROLLER = "CLEAR_ANIMATION_CONTROLLER"

const initialState = { authType: "login" };

function reducer(state, action) {
	switch (action.type) {
	  case SWITCH_AUTH_TYPE: {
			return {
				authType: action.authType
			}
		}
	  default:
	    return state
	}
}

const RemindForm = ( props ) => {
	const { state, dispatch } = props

	return (<>
		<h3 className="uk-card-title uk-text-center">Remember </h3>
		<form>
			<div className="uk-margin">
				<div className="uk-inline uk-width-1-1">
					<span className="uk-form-icon" uk-icon="icon: mail"></span>
					<input className="uk-input uk-form-medium" type="email" placeholder="email"/>
				</div>
			</div>
			<div className="uk-margin uk-text-center">
				<button className="uk-button uk-button-primary uk-button-medium uk-width-2-3 uk-border-pill">Remind</button>
			</div>
			<div className="uk-text-small uk-text-center">
				However, did you remember? <a onClick={ () => dispatch( { type: SWITCH_AUTH_TYPE, authType: "login" } ) }>Login now!</a>
			</div>
		</form>
	</>)
}

const RegisterForm = ( props ) => {
	const { state, dispatch } = props

	return (<>
		<h3 className="uk-card-title uk-text-center">Join us on Locally!</h3>
		<form>
			<div className="uk-margin">
				<div className="uk-inline uk-width-1-1">
					<span className="uk-form-icon" uk-icon="icon: mail"></span>
					<input className="uk-input uk-form-medium" type="email" placeholder="email"/>
				</div>
			</div>
			<div className="uk-margin">
				<div className="uk-inline uk-width-1-1">
					<span className="uk-form-icon" uk-icon="icon: user"></span>
					<input className="uk-input uk-form-medium" type="text" placeholder="username"/>
				</div>
			</div>
			<div className="uk-margin">
				<div className="uk-inline uk-width-1-1">
					<span className="uk-form-icon" uk-icon="icon: lock"></span>
					<input className="uk-input uk-form-medium" type="password" placeholder="password"/>
				</div>
			</div>
			<div className="uk-margin uk-text-center">
				<button className="uk-button uk-button-primary uk-button-medium uk-width-2-3 uk-border-pill">Register</button>
			</div>
			<div className="uk-text-small uk-text-center">
				Already hava an account? <a onClick={ () => dispatch( { type: SWITCH_AUTH_TYPE, authType: "login" } ) }>Login now!</a>
			</div>
		</form>
	</>)
}

const LoginForm = ( props ) => {
	const { state, dispatch } = props

	return (<>
		<h3 className="uk-card-title uk-text-center">Welcome on Locally!</h3>
		<form>
			<div className="uk-margin">
				<div className="uk-inline uk-width-1-1">
					<span className="uk-form-icon" uk-icon="icon: mail"></span>
					<input className="uk-input uk-form-medium" type="email" placeholder="email"/>
				</div>
			</div>
			<div className="uk-margin">
				<div className="uk-inline uk-width-1-1">
					<span className="uk-form-icon" uk-icon="icon: lock"></span>
					<input className="uk-input uk-form-medium" type="password" placeholder="password"/>
				</div>
			</div>
			<div className="uk-margin uk-text-center">
				<button className="uk-button uk-button-primary uk-button-medium uk-width-2-3 uk-border-pill">Login</button>
			</div>
			<div className="uk-text-small uk-text-center">
				Forgot password? <a onClick={ () => dispatch( { type: SWITCH_AUTH_TYPE, authType: "remind" } ) }>Refresh!</a>
			</div>
			<div className="uk-text-small uk-text-center">
				Not registered? <a onClick={ () => dispatch( { type: SWITCH_AUTH_TYPE, authType: "register" } ) }>Register now!</a>
			</div>
		</form>
	</>)
}

const AuthPage = () => {
	const [ state, dispatch ] = useReducer( reducer, initialState );

	let form = <LoginForm state={state} dispatch={dispatch}/>
	if ( state.authType === "register" ) {
		form = <RegisterForm state={state} dispatch={dispatch}/>
	} else 	if ( state.authType === "remind" ) {
			form = <RemindForm state={state} dispatch={dispatch}/>
	}

	return (<>
		<div className="uk-section uk-overflow-hidden uk-position-large uk-position-center" >
			<div className="uk-flex uk-flex-middle uk-animation-fade uk-animation-slide-bottom-small">
			<div className="uk-width-1-1 uk-box-shadow-large">
				<div className="uk-grid uk-margin-remove-left">
					<div className="uk-margin-auto uk-card uk-card-default uk-card-body ">
						{ form }
					</div>
				</div>
			</div>
			</div>
		</div>
	</>)
}

export default AuthPage;
