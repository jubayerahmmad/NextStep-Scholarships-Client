import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1 className="text-4xl font-playfair">
          NextStep Scholarships playfair
        </h1>
        <h1 className="text-4xl">NextStep Scholarships Comfortaa</h1>
        <p className="text-4xl">NextStep Scholarships Merriweather</p>
      </div>
    ),
  },
]);

export default router;
