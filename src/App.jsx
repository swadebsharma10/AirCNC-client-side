import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider";
import router from "./routes/router";


const App = () => {
  return (
    <div>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </div>
  );
};

export default App;