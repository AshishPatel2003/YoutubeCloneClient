import React from "react";
import { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useDispatch } from "react-redux";
import { login } from "../../actions/auth";
import "./RegisterPage.css";

function RegsiterPage({ setIsRegister, setIsLogin }) {
	// const CurrentUser = useSelector(state=>state.currentUserReducer)

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const dispatch = useDispatch();

	const handleSubmit = () => {
		if (!email) {
			alert("Plz Enter Email!");
		} else if (!password) {
			alert("Plz Enter Password !");
		} else if (password !== confirmPassword) {
			alert("Password doesn't Match");
		} else {
			dispatch(login({ email: email, password: password, isLogin: false }));
			setIsRegister(false)
		}
	};

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
			<div className="x_div" onClick={() => setIsRegister(false)}>
				<input
					type="submit"
					value={"x"}
					name="text"
					className="x_btn"
				/>
			</div>
			<div className="container2_RegisterPage">
				<div className="reg_header_div">
					<h1 clas>Sign Up</h1>
					<a
						onClick={() => {
							setIsRegister(false);
							setIsLogin(true);
						}}
					>
						Already have an Account? Try Login
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
						placeholder="Set Password"
						className=""
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<input
						type="Password"
						name="confirmPassword"
						placeholder="Re-Type Password"
						className=""
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</div>
				<div className="reg_submit_div">
					<input
						type="submit"
						value="Register"
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

export default RegsiterPage;
