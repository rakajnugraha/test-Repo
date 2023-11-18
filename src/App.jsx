import { Outlet, useLocation } from "react-router-dom";
import { DynamicThemeProvider } from "./context/DynamicThemeContext";
import { CartProvider } from "./context/CartProvider";
import Header from "./components/organism/Header/Header";
import Footer from "./components/organism/Footer";
import { router } from "./routers";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <DynamicThemeProvider>
        <CartProvider>
          <main>
            <RouterProvider router={router} />
            <Outlet />
          </main>
        </CartProvider>
      </DynamicThemeProvider>
    </>
  );
}

export default App;
