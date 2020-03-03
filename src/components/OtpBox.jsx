import React from "react";

export default function OtpBox(props) {
	
	// componentDidUpdate() {
	// 	console.log(this.inputref.current)
	// 	this.inputref.current.focus();
    // }
    const { autoFocus, checkBackSpace, validate, value} = props
		return (
			
				<input
					// ref={this.inputref}
					type="text"
					// ref={e => assignRef(e, id)}
					style={styles.input}
					min="0"
					maxLength="1"
                    // disabled={!autoFocus}
                    onKeyDown={checkBackSpace}
					autoFocus={autoFocus}
					onChange={e => validate(e.target.value)}
					value={value}
				/>
			
		);
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
