/* eslint-disable jest/valid-expect */
import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("MultipleCustomHooks test", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    incrementValue: mockIncrement,
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  test("Debe mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText("Loading..."));
    expect(screen.getByText("Rick and morty characters"));
    const nextButton = screen.getByRole("button", {
      name: "Next character",
    });
    expect(nextButton.disabled).toBeTruthy();
  });

  test("Debe mostrar un personaje", () => {
    useFetch.mockReturnValue({
      data: {
        name: "Rick Sanchez",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        species: "Human",
      },
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText("Rick Sanchez")).toBeTruthy();
    const nextButton = screen.getByRole("button", {
      name: "Next character",
    });
    expect(nextButton.disabled).toBeFalsy();
  });

  test("Debe llamar a la funcion incrementValue", () => {
    useFetch.mockReturnValue({
      data: {
        name: "Rick Sanchez",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        species: "Human",
      },
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", {
      name: "Next character",
    });
    fireEvent.click(nextButton);
    expect(mockIncrement).toHaveBeenCalled();
  });
});
