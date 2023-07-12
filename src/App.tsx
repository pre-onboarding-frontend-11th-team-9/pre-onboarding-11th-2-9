import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./global.scss";
import { routes } from "./routes";
import { IssueProvider } from "./context/IssueContext";

const router = createBrowserRouter(routes);

function App() {
  console.log("App RENDERING....");
  return (
    <IssueProvider>
      <RouterProvider router={router} />
    </IssueProvider>
  );
}

export default App;
