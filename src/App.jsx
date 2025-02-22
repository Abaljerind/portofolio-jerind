import { RouterProvider } from "react-router-dom";
import { router } from "./routers/routes";

function App() {
  // kiri kanan untuk mobile 8px
  // kiri kanan didalam navbar, ujung kiri kanannya 16px

  return (
    <div className="font-openSans p-2 md:mx-auto md:w-full md:max-w-[576px] lg:pt-4 lg:pb-12">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
