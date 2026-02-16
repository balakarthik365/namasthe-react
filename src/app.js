import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense, useEffect, useState } from "react";
import Shimmer from "./components/Shimmer";
const Groceries = lazy(() => import("./components/Groceries"));
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux"; 
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
const AppLayout = () => {
  const [userinfo, setUserInfo] = useState();
  useEffect(() => {
    const data = {
      name: "Balakarthik",
    };
    setUserInfo(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userinfo, setUserInfo }}>
        <div className="m-0 box-border p-0.5">
          <Header />
          {/* if path is / then load <Body /> else load releavent components based on path. this can be achived using the Outlet */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about-us", element: <About /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/groceries",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Groceries />
          </Suspense>
        ),
      },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
