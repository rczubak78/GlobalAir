import { TextInput, Button } from "grommet";

import React from "react";

const Authentication = () => {
	return (
		<form action="/">
			<TextInput type="text" name="login" placeholder="Login" />
			<TextInput type="password" name="password" placeholder="Password" />
			<TextInput
				type="password"
				name="repeatpassword"
				placeholder="Repeate Password"
			/>
			<Button primary label="Wyślij" type="submit" />
		</form>
	);
};

export default Authentication;
