import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const [Component, loader] = await Promise.all([
        import("./pages/Home/Home.jsx"),
        import("./pages/Home/Home.loader.js"),
      ]);
      return {
        Component: Component.default,
        loader: loader.default,
      };
    },
  },
]);

export default router;
