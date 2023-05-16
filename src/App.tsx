import "./App.css";

import { Basement } from "./Component/Basement";
import { Bathroom } from "./Component/Bathroom";
import { Cabinet } from "./Component/Cabinet";
import { Children } from "./Component/Children";
import { Kitchen } from "./Component/Kitchen";
import { Pantry } from "./Component/Pantry";

export default function App() {
  return (
    <main>
      <Kitchen />
      <Children />
      <Bathroom />
      <Cabinet />
      <Basement />
      <Pantry />
    </main>
  );
}
