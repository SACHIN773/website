import react, { Component, Fragment, createContext } from "react";
import "./App.css";
import Events from "./Pages/Events/Events";
import Activites from "./Pages/Activities/Activites";
import { Routes, Route, Link } from "react-router-dom";
import Mainlayout from "./Layouts/Mainlayout/Mainlayout";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route index element={<Events />} />
            <Route path="activities" element={<Activites />} />
          </Route>
        </Routes>
      </Fragment>
    );
  }
}

export default App;
