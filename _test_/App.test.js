import React from "react";
import { render } from "@testing-library/react-native";
import App from "../App";

describe("App Component", () => {
  it("renderiza correctamente", () => {
    const { getByText } = render(<App />);
    expect(getByText("Bienvenido")).toBeTruthy();
  });
});
