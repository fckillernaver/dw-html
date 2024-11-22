import {
  createRoutesFromElements,
  Route,
  createHashRouter,
} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import HTMLScreen from "./HTMLScreen";
import VScreen from "./VScreen";
import TextsScreen from "./html/TextsScreen";

export const AppRouter = createHashRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomeScreen />} />
      <Route path="html" element={<HTMLScreen />}>
        <Route path="texts" element={<TextsScreen />} />
      </Route>
      <Route path="v" element={<VScreen />} />
    </Route>
  )
);
