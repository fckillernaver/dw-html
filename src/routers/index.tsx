import {
  createBrowserRouter,
  BrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import HTMLScreen from "./HTMLScreen";
import HTMLTarget from "./HTMLTarget";

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/html" element={<HTMLScreen />}>
        <Route path="/html/:tag" element={<HTMLTarget />} />
      </Route>
    </Route>
  )
);
