import React from "react";
import { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth";
import "./../RegisterPage/RegisterPage.css";

function LoginPage({ setIsLogin, setIsRegister }) {
	// const CurrentUser = useSelector(state=>state.currentUserReducer)

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const handleSubmit = () => {
		if (!email) {
			alert("Plz Enter Email!");
		} else if (!password) {
			alert("Plz Enter Password !");
		} else {
			dispatch(
				login({ email: email, password: password, isLogin: true })
			);
			setIsLogin(false);
		}
	};

	const CurrentUser = useSelector((state) => state.currentUserReducer);

	useEffect(() => {
		function start() {
			gapi.client.init({
				clientId:
					"426950288273-7ugsv5csdcck4lb7ivu4r79aq3t384ah.apps.googleusercontent.com",
				scope: "email",
			});
		}
		gapi.load("client:auth2", start);
	}, []);

	const onSuccess = (response) => {
		const Email = response?.profileObj.email;
		console.log(Email);
		dispatch(login({ email: Email })).then(() => {
			setIsRegister(false);
			setIsLogin(false);
		});
	};

	const onFailure = (response) => {
		console.log(response);
	};

	return (
		<div className="container_RegisterPage">
			<div className="x_div" onClick={() => setIsLogin(false)}>
				<input
					type="submit"
					value={"x"}
					name="text"
					className="x_btn"
				/>
			</div>
			<div className="container2_RegisterPage">
				<div className="reg_header_div">
					<h1 clas>Sign In</h1>
					<a
						onClick={() => {
							setIsRegister(true);
							setIsLogin(false);
						}}
					>
						Don't have an Account? SignUp Here
					</a>
				</div>

				<div className="reg_form_div">
					<input
						type="Email"
						name="email"
						placeholder="Email"
						className=""
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<input
						type="Password"
						name="password"
						placeholder="Password"
						className=""
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="reg_submit_div">
					<input
						type="submit"
						value="Sign In"
						className=""
						onClick={handleSubmit}
					/>
				</div>
				<div className="divider"></div>
				<div className="SignIn_with_Google_div">
					<GoogleLogin
						className="SignInWithGooglebtn"
						clientIds="426950288273-7ugsv5csdcck4lb7ivu4r79aq3t384ah.apps.googleusercontent.com"
						onSuccess={onSuccess}
						onFailure={onFailure}
					/>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
