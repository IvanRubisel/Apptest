import React from "react";
import { render } from "@testing-library/react-native";
import App from "../App";

describe("App Component", () => {
  it("renderiza correctamente", () => {
    const { getByText } = render(<App />);

    // Verificar si el texto 'Bienvenido' está presente
    expect(getByText("Bienvenido")).toBeTruthy();
  });
});
