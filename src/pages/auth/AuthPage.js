import React, { useReducer } from 'react';
import UserProfile from '../../components/user-profile/UserProfile.js';
import get from '../../services/apiService.js';
import { useParams, Route } from 'react-router-dom';
import  endpoints  from '../../config/endpoints.js';
import {authContext} from '../../components/auth';
import {logIn, logOut} from '../../components/auth/authService.js'
import {useHistory} from 'react-router-dom'

const SWITCH_AUTH_TYPE = "SWITCH_AUTH_TYPE"
const CLEAR_ANIMATION_CONTROLLER = "CLEAR_ANIMATION_CONTROLLER"

const initialState = { authType: "login", animationController: "uk-animation-fade uk-animation-slide-bottom-small" };

function reducer(state, action) {
	switch (action.type) {
	  case SWITCH_AUTH_TYPE: {
			console.log( "sss" )
			return {
				authType: action.authType,
				animationController: "uk-animation-shake"
			}
		}
	  case CLEAR_ANIMATION_CONTROLLER: {
			return {
				...state,
				animationController: ""
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
				Already have an account? <a onClick={ () => dispatch( { type: SWITCH_AUTH_TYPE, authType: "login" } ) }>Login now!</a>
			</div>
		</form>
	</>)
}




const LoginForm = ( props ) => {
	const { state, dispatch } = props
	const [ authState, authDispatch ] = React.useContext(authContext);
	const [login, setLogin] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [error, setError] = React.useState(false);
	const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);
	const [helperText, setHelperText] = React.useState('');
	let history = useHistory();


	React.useEffect(() => {
		if (login.trim() && password.trim()) {
		  setIsButtonDisabled(false);
		} else {
		  setIsButtonDisabled(true);
		}
	  }, [login, password]);




	return (<>
		<h3 className="uk-card-title uk-text-center">Welcome on Locally!</h3>
		<form>
			<div className="uk-margin">
				<div className="uk-inline uk-width-1-1">
					<span className="uk-form-icon" uk-icon="icon: mail"></span>
					<input onChange={(e)=>setLogin(e.target.value)}
                 className="uk-input uk-form-medium" type="email" placeholder="email"/>
				</div>
			</div>
			<div className="uk-margin">
				<div className="uk-inline uk-width-1-1">
					<span className="uk-form-icon" uk-icon="icon: lock"></span>
					<input    onChange={(e)=>setPassword(e.target.value)}
                className="uk-input uk-form-medium" type="password" placeholder="password"/>
				</div>
			</div>
			<div className="uk-margin uk-text-center">
				<button  onClick={e => {
						e.preventDefault()
						logIn(login, password)
						.then(token => {
							console.log(token)
							if (token && token != null) {
								setError(false);
								console.log("token not null", token)
								setHelperText('Login Successfully');
								authDispatch({
									type: 'LOGIN',
									payload: {
										isLoggedIn: true,
										token: token,
										error: ''
									}
								  })
								  history.push("/account/offers")
							}
						})
					}} className="uk-button uk-button-primary uk-button-medium uk-width-2-3 uk-border-pill" 
					disabled={isButtonDisabled}>Login</button>
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
			<div className={ `uk-flex uk-flex-middle ${ state.animationController }` } onAnimationEnd={ () => dispatch( { type: CLEAR_ANIMATION_CONTROLLER, authType: "register" } ) }>
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
