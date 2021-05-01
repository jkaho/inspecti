import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Reviews from "./pages/Reviews";
import Profile from "./pages/Profile";
import Notes from "./pages/Notes";
import MonthlySchedule from "./pages/MonthlySchedule";
import DailySchedule from "./pages/DailySchedule";
import InspectedProperties from "./pages/InspectedProperties";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/notes" component={Notes} />
          <Route exact path="/monthly" component={MonthlySchedule} />
          <Route exact path="/daily" component={DailySchedule} />
          <Route exact path="/inspected" component={InspectedProperties} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
