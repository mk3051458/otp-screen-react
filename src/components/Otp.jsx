
import React, { Component } from "react";
export default class Otp extends Component {
	constructor(props) {
		super(props);
		const num = this.props.numberOfOtpDigits;
		const otpboxIdArr = [];
		const valArr = [];

		for (let index = 0; index < num; index++) {
			otpboxIdArr[index] = index;
			valArr[index] = "";
		}

		let elRefArr = [];
		elRefArr = Array(num)
			.fill()
			.map((_, i) => elRefArr[i] || React.createRef());

		this.state = {
			otpboxIdArr,
			valArr,
			onFocusOtp: 0,
			length: num,
			elRefArr,
			err: ""
		};
	}

	validate = (value, id) => {
		const regex = /[0-9]/;
		let { onFocusOtp, valArr, elRefArr, length } = this.state;
		if (regex.test(value)) {
			valArr[id] = value;
			onFocusOtp = id;
			if (onFocusOtp !== length - 1) {
				onFocusOtp++;
			}

			elRefArr[onFocusOtp].current.focus();
			this.setState({ onFocusOtp, valArr });
		} else if (value === "") {
			valArr[id] = value;
			this.setState({ valArr });
		}
	};

	checkOtp = () => {
		const { valArr } = this.state;
		const result = valArr.filter(el => el === "");
		if (result.length > 0) {
			this.setState({ err: "Incorrect OTP" });
		}
	};
	checkBackSpace = (e, id) => {
		let { valArr, onFocusOtp, elRefArr } = this.state;
		if (e.keyCode === 8 && onFocusOtp !== 0 && valArr[id] === "") {
			onFocusOtp = id - 1;
			elRefArr[onFocusOtp].current.focus();
			this.setState({ onFocusOtp });
		}
	};

	render() {
		const { otpboxIdArr, valArr, onFocusOtp, elRefArr, err } = this.state;
		return (
			<>
				<div style={styles.otpScreen}>
					<h1>Enter OTP</h1>
					<div style={{}}>
						{otpboxIdArr.map(el => (
							<input
								ref={elRefArr[el]}
								type="text"
								key={el}
								style={styles.input}
								min="0"
								maxLength="1"
								onKeyDown={e => this.checkBackSpace(e, el)}
								autoFocus={el === onFocusOtp}
								onChange={e =>
									this.validate(e.target.value, el)
								}
								value={valArr[el]}
							/>
						))}
					</div>
					<button style={styles.button} onClick={this.checkOtp}>
						Submit
					</button>
					<h2>{err}</h2>
				</div>
			</>
		);
	}
}
const styles = {
	otpScreen: {
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexWrap: "wrap"
	},
	button: {
		padding: "1rem 2rem",
		marginLeft: "1rem",
		background: "red",
		color: "white",
		borderRadius: 15,
		fontSize: "1rem"
	},
	input: {
		padding: 10,
		margin: "10px 0px",
		fontSize: 20,
		textAlign: "center",
		width: 40,
		marginLeft: 10
	}
};
