import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe("Pruebas en el useCounter", () => {
  test("retornar valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrementValue, resetValue, incrementValue } =
      result.current;

    expect(counter).toBe(10);
    expect(decrementValue).toEqual(expect.any(Function));
    expect(resetValue).toEqual(expect.any(Function));
    expect(incrementValue).toEqual(expect.any(Function));
  });

  test("Debe generar el counter con el valor de 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test("Debe incrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { incrementValue } = result.current;
    act(() => {
      incrementValue();
      incrementValue(2);
    });
    expect(result.current.counter).toBe(103);
  });
  test("Debe decrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrementValue } = result.current;
    act(() => {
      decrementValue();
      decrementValue(2);
    });
    expect(result.current.counter).toBe(97);
  });
  test("Debe resetear el contador al valor definido", () => {
    const { result } = renderHook(() => useCounter(100));
    const { incrementValue, resetValue } = result.current;
    act(() => {
      incrementValue(1);
      incrementValue(1);
      incrementValue(1);
      resetValue();
    });
    expect(result.current.counter).toBe(100);
  });
});
