import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Header from "./components/Header";

import Home from "./pages/Home";
import Series from "./pages/Series";
import Comics from "./pages/Comics";
import Error404 from "./pages/Error404";
import useFetch from "./hooks/useFetch";

function App() {
  const exampleApi = useFetch(
    "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=551b78f51128ed74892d49ca92520b0b&hash=daf822825bc43c618a803d08b85830db"
  );
  console.log(exampleApi);
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact element={<Home />} />
          <Route path="/inicio" exact element={<Home />} />
          <Route path="/series" exact element={<Series />} />
          <Route path="/comics" exact element={<Comics />} />
          <Route element={<Error404 />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
