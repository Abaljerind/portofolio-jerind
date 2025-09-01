import { RouterProvider } from "react-router-dom";
import { router } from "./routers/routes";

function App() {
  // kiri kanan untuk mobile 8px
  // kiri kanan didalam navbar, ujung kiri kanannya 16px

  return (
    <div className="font-openSans p-2 min-[769px]:mx-auto min-[769px]:max-w-[510px] md:mx-auto lg:w-full lg:max-w-[600px] lg:pt-4 lg:pb-12">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
