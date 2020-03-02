import React, { Component } from "react";

export default class OtpBox extends Component {
	constructor(props) {
		super(props);
		this.inputref = React.createRef();
	}

	componentDidUpdate() {
		this.inputref.current.focus();
    }
    checkBackSpace = e =>{
        console.log(e.keyCode)
    }
	render() {
        const { autoFocus, checkBackSpace, validate, value } = this.props
		return (
			<div style={styles.divStyle}>
				<input
					ref={this.inputref}
					type="text"
					style={styles.input}
					min="0"
					maxLength="1"
                    disabled={!autoFocus}
                    onKeyDown={checkBackSpace}
					autoFocus={autoFocus}
					onChange={e => validate(e.target.value)}
					value={value}
				/>
			</div>
		);
	}
}
const styles = {
	input: {
		padding: 10,
		fontSize: 20,
		width: 40
	},
	divStyle: {
		marginLeft: 10
	}
};
