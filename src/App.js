import "./App.css";
import BMI from "./BMI";
import Imagecontainer from "./Components/Imgcontainer";
import Navbar from "../src/Components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../src/Components/About";
import Dietcalculator from "./Components/Dietcalculator";
import Symptoms from "../src/Components/Symptoms";
import JSONDATA from "./MOCK_DATA.json";
import Exercise from "../src/Components/Exercise";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/diet-calculator" component={Dietcalculator} exact>
            <Navbar></Navbar>
            <Dietcalculator></Dietcalculator>
          </Route>

          <Route path="/bmi-calculator" exact>
            <Navbar></Navbar>
            <BMI></BMI>
          </Route>

          <Route exact path="/articles">
            <Navbar></Navbar>
            <h1>articles</h1>
          </Route>
          <Route path="/about" exact>
            <Navbar></Navbar>
            <About></About>
          </Route>

          <Route path="/symptoms">
            <div className="symptoms_page">
              <Symptoms></Symptoms>
            </div>
          </Route>

          {JSONDATA.map((val, key) => {
            return (
              <Route exact path={`/${val.index}`}>
                <div className="disease">
                  <h1 key={key}>{val.disease}</h1>
                  <div className="disease_list">
                    <h2>Symptoms</h2>

                    {val.symptom1 == "" ? (
                      <div></div>
                    ) : (
                      <li>◾ {val.symptom1}</li>
                    )}

                    {val.symptom2 == "" ? (
                      <div></div>
                    ) : (
                      <li>◾ {val.symptom2}</li>
                    )}

                    {val.symptom3 == "" ? (
                      <div></div>
                    ) : (
                      <li>◾ {val.symptom3}</li>
                    )}

                    {val.symptom4 == "" ? (
                      <div></div>
                    ) : (
                      <li>◾ {val.symptom4}</li>
                    )}

                    {val.symptom5 == "" ? (
                      <div></div>
                    ) : (
                      <li>◾ {val.symptom5}</li>
                    )}
                  </div>

                  <div className="prevention_list">
                    <h2>Prevention</h2>

                    {val.prevention1 == "" ? (
                      <div></div>
                    ) : (
                      <li>◾ {val.prevention1}</li>
                    )}

                    {val.prevention2 == "" ? (
                      <div></div>
                    ) : (
                      <li>◾ {val.prevention2}</li>
                    )}

                    {val.prevention3 == "" ? (
                      <div></div>
                    ) : (
                      <li>◾ {val.prevention3}</li>
                    )}

                    {val.prevention4 == "" ? (
                      <div></div>
                    ) : (
                      <li>◾ {val.prevention4}</li>
                    )}

                    {val.prevention5 == "" ? (
                      <div></div>
                    ) : (
                      <li>◾ {val.prevention5}</li>
                    )}
                  </div>
                  <br></br>

                  <div>
                    <h2>Cause</h2>
                    <li>{val.cause}</li>
                    <br></br>
                    <br></br>
                  </div>
                  <div>
                    <h2>Diet</h2>
                    <li>{val.diet}</li>
                  </div>
                </div>
              </Route>
            );
          })}

          <Route path="/exercise">
            <Navbar></Navbar>
            <Exercise></Exercise>
          </Route>

          <Route path="/">
            <Navbar></Navbar>

            <Imagecontainer></Imagecontainer>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
