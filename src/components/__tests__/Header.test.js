import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header Component functionality", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );
  });

  it("Should render the Login button", () => {
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  it("Should render the Cart Items", () => {
    const cartItem = screen.getByText(/cart/i);
    expect(cartItem).toBeInTheDocument();
  });

  it("Should render the list Items", () => {
    const list = screen.getAllByRole("listitem");
    expect(list.length).toBeGreaterThan(0);
  });

  it("Should render the Login and Logout buttons", () => {
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
  });
});
