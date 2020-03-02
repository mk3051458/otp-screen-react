import React, { Component } from "react";
import OtpBox from "./OtpBox";
export default class Otp extends Component {
    constructor(props){
        super(props)
        const num = this.props.numberOfOtpDigits
        const otpboxIdArr = []
        const valArr = []

        for (let index = 0; index < num; index++) {
            otpboxIdArr[index] = index;
            valArr[index] = "";
        }

        this.state = {
            otpboxIdArr,
            valArr,
            onFocusOtp: 0,
		    len: num
        }
    }
    
    validate = (value, id) => {
       
		const regex = /[0-9]/;
		let { onFocusOtp, valArr } = this.state;
		if (regex.test(value)) {
            console.log("if")
			valArr[onFocusOtp] = value;
			if (onFocusOtp !== valArr.length - 1) {
				onFocusOtp++;
			}
			this.setState({ onFocusOtp, valArr });
		} else if (value === "") {
            console.log("else")

			valArr[onFocusOtp] = value;
			this.setState({ valArr });
		}
	};

	checkBackSpace = (e, id) => {
		if (
			e.keyCode === 8 &&
			this.state.valArr[this.state.len - 1] === "" &&
			this.state.onFocusOtp !== 0
		) {
			let { onFocusOtp } = this.state;
			onFocusOtp--;
			this.setState({ onFocusOtp });
		}
	};

	render() {
        const { otpboxIdArr, valArr, onFocusOtp } = this.state
		return (
			<div style={styles.otpScreen}>
				<h1>Enter OTP</h1>
				{otpboxIdArr.map(el => (
					<OtpBox
                        key={el}
                        id={el}
						validate={this.validate}
						checkBackSpace={this.checkBackSpace}
						value={valArr[el]}
						autoFocus={el === onFocusOtp}
						handleChange={this.handleChange}
					/>
				))}
                <button style={styles.button}>Submit</button>
			</div>
		);
	}
}
const styles = {
	otpScreen: {
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
    },
    button : {
        padding: "1rem 2rem",
        marginLeft : "1rem",
        background : "red",
        color : "white",
        borderRadius : 15,
        fontSize : "1rem"
    }
};
