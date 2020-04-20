import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Navbar } from "./navbar/Navbar";
import styles from "./App.module.css";
import { Alert } from "./alert/Alert";
import { AlertState } from "./../redux/alert/AlertState";

function App() {
  return (
    <AlertState>
      <BrowserRouter>
        <Navbar />
        <div className={styles.container}>
          <Alert />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    </AlertState>
  );
}

export default App;
