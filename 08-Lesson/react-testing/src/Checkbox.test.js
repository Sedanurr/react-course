import { render, fireEvent } from "@testing-library/react"
import { Checkbox } from "./Checkbox"

test("checkbox value of true", () => {
    const { getByLabelText } = render(<Checkbox />);
    const checkbox = getByLabelText(/not checked/);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);

})