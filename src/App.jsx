import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
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