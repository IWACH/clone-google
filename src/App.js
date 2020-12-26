
import { BrowserRouter } from "react-router-dom";
import "./css/index.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Content from "./components/Content";


const App = () => (
  <BrowserRouter>
    <div>
      <Content/>
    </div>
  </BrowserRouter>
);

export default App;
