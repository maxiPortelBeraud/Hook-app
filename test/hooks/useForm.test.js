import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("useForm test", () => {
  const initialForm = {
    name: "Maximiliano",
    user: "Navixam",
    email: "maximiliano.portel@valtech.com",
  };

  test("debe retornar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      name: initialForm.name,
      user: initialForm.user,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("Debe cambiar el nombre del formulario", () => {
    const newValue = "Juan";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
    });

    expect(result.current.name).toEqual(newValue);
    expect(result.current.formState.name).toEqual(newValue);
  });
  test("Debe resetear el estado del formulario", () => {
    const newValue = "Juan";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
      onResetForm();
    });

    expect(result.current.name).toEqual(initialForm.name);
    expect(result.current.formState.name).toEqual(initialForm.name);
  });
});
