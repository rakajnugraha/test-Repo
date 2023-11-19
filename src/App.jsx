import { Outlet, useLocation } from "react-router-dom";
import { router } from "./routers";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <main>
        <RouterProvider router={router} />
        <Outlet />
      </main>
    </>
  );
}

export default App;
