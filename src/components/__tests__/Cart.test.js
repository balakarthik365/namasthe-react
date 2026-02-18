import { BrowserRouter } from "react-router-dom";
import RestaurantMenu from "../RestaurantMenu";
import { render, act, screen, fireEvent } from "@testing-library/react";
import MOCK_DATA from "../mocks/restaurantMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import Cart from "../Cart";
global.fetch = jest.fn().mockResolvedValue({
  json: () => Promise.resolve(MOCK_DATA),
});
it("Should load Restaurant cards component with cart count", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>,
    );
  });
  const accordianHeader = screen.getByText("Smoothie Bowls");
  fireEvent.click(accordianHeader);
  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(2);
});

it("Should update the cart count", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>,
    );
  });
  const accordianHeader = screen.getByText("Smoothie Bowls");
  fireEvent.click(accordianHeader);
  const addBtn = screen.getAllByRole("button", { name: "+" });
  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();
  fireEvent.click(addBtn[0]);
  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
  fireEvent.click(addBtn[1]);
  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();
});

it("Should update the cart count", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>,
    );
  });
  const accordianHeader = screen.getByText("Smoothie Bowls");
  fireEvent.click(accordianHeader);
  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(4);
});

it("Should show clear cart items", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>,
    );
  }); 
  const foodItems = screen.getAllByTestId("foodItems"); 
  const clearCartBtn = screen.getByRole("button", { name: "Clear cart" });
  fireEvent.click(clearCartBtn);
  expect(foodItems.length).toBe(2);
  expect(
    screen.getByText("Cart is empty. Please add Items to the cart!!"),
  ).toBeInTheDocument();
});
