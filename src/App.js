import { Provider } from "react-redux";
import "./App.css";
import Body from "./component/Body";
import Header from "./component/Header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./component/MainContainer";
import WatchPage from "./component/WatchPage";
import SearchResults from "./component/SearchResults";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "search",
        element: <SearchResults />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <RouterProvider router={appRouter}>
          <Header />
          <Body />
        </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
