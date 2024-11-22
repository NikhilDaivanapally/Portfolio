import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home.page";
import About from "./pages/About.page";
import Contact from "./pages/Contact.page";
import Projects from "./pages/Projects.page";

import Page404 from "./pages/Page404";
import { AnimatePresence } from "framer-motion";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "*",
      element: <Page404 />,
    },
  ]);

  return (
    <main className="w-full min-h-screen font-['gilroy'] overflow-hidden bg-background">
      <AnimatePresence mode="wait">
        <RouterProvider router={router} />
      </AnimatePresence>
    </main>
  );
}

export default App;
