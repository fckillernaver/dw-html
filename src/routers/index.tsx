import {
  // createBrowserRouter,
  createRoutesFromElements,
  Route,
  createHashRouter,
} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import HTMLScreen from "./HTMLScreen";
import HTMLTarget from "./HTMLTarget";
import VScreen from "./VScreen";

export const AppRouter = createHashRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomeScreen />} />
      <Route path="html" element={<HTMLScreen />}>
        <Route path="html/:tag" element={<HTMLTarget />} />
      </Route>
      <Route path="v" element={<VScreen />} />
    </Route>
  )
);
