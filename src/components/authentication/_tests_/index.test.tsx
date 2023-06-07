import { fireEvent, render, screen } from "@testing-library/react";
import Authentication from "..";

describe("Authentication", () => {
	test("should show register or logins state in input", () => {
		render(<Authentication />);
		expect(
			screen.getByRole("textbox", { name: "repeatpassword" })
		).not.toBeNull();
		const button = screen.getByRole("button", { name: "btn-login" });
		fireEvent.click(button);
		expect(
			screen.queryByRole("textbox", { name: "repeatpassword" })
		).toBeNull();
	});
});
