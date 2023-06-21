import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext";
import { MemoryRouter } from "react-router-dom";

describe("MainApp test", () => {
  test("Debe mostrar HomePage", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("HomePage")).toBeTruthy();
  });
  test("Debe mostrar LoginPage", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );

    const hrefActive = screen.getByRole("link", { current: "page" });

    expect(screen.getByText("LoginPage")).toBeTruthy();
    expect(hrefActive.className).toContain("active");
  });
});
