import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Alert } from "react-native";
import LoginScreen from "../views/LoginScreen";

jest.spyOn(Alert, "alert");

describe("LoginScreen Component", () => {
  beforeEach(() => {
    jest.clearAllMocks(); 
  });

  it("muestra un error si los campos están vacíos", () => {
    const { getByText } = render(<LoginScreen />);
    
    fireEvent.press(getByText("Iniciar sesión"));

    expect(Alert.alert).toHaveBeenCalledWith("Error", "Por favor, completa todos los campos.");
  });

  it("muestra un mensaje de bienvenida al iniciar sesión", () => {
    const { getByPlaceholderText, getByText } = render(<LoginScreen />);
    
    // Completar los campos
    fireEvent.changeText(getByPlaceholderText("Correo electrónico"), "test@example.com");
    fireEvent.changeText(getByPlaceholderText("Contraseña"), "123456");
    
    // Simular presionar el botón
    fireEvent.press(getByText("Iniciar sesión"));

    expect(Alert.alert).toHaveBeenCalledWith("Bienvenido", "¡Hola, test@example.com!");
  });

  it("renderiza correctamente el formulario", () => {
    const { getByPlaceholderText, getByText } = render(<LoginScreen />);

    // Verificar los campos y botones
    expect(getByPlaceholderText("Correo electrónico")).toBeTruthy();
    expect(getByPlaceholderText("Contraseña")).toBeTruthy();
    expect(getByText("Iniciar sesión")).toBeTruthy();
    expect(getByText("¿Olvidaste tu contraseña?")).toBeTruthy();
  });
});
