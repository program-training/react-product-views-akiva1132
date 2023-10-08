import { RouterProvider } from "react-router";
import { router } from "./route";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
          <RouterProvider router={router} />
      </BrowserRouter>
  );
}

export default App;
