import { render, screen, act, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../../utils/restaurantList.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
global.fetch = jest.fn().mockResolvedValue({
  json: () => Promise.resolve(MOCK_DATA),
});
describe("Body Component testing", () => {
  it("should render the Body component with search", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Body />
          </Provider>
        </BrowserRouter>,
      );
    });
    const searchInput = screen.getByTestId("searchList");
    expect(searchInput).toBeInTheDocument();
  });
  it("should render the Body component with watchList", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Body />
          </Provider>
        </BrowserRouter>,
      );
    });
    const searchInput = screen.getByTestId("searchList");
    expect(searchInput).toBeInTheDocument();
  });
  it("should render the Body component with 'Top Rated List' Restaurants", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Body />
          </Provider>
        </BrowserRouter>,
      );
    });
    const topRatedRest = screen.getByRole("button", {
      name: "Top Listed Restaurants",
    });
    fireEvent.click(topRatedRest);
    const resCardList = screen.getAllByTestId("resCard");
    expect(resCardList.length).toBe(5);
  });
  it("should render the Body component with list of Search item list Restaurants", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Body />
          </Provider>
        </BrowserRouter>,
      );
    });
    const searchInput = screen.getByTestId("searchList");
    fireEvent.change(searchInput, { target: { value: "Pasta" } });
    const resCardList = screen.getAllByTestId("resCard");
    expect(resCardList.length).toBe(1);
  });
});
