import { BrowserRouter } from "react-router";
import Router from "./routes/Router";

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
