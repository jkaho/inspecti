import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Reviews from "./pages/Reviews";
import Profile from "./pages/Profile";
import Notes from "./pages/Notes";
import MonthlySchedule from "./pages/MonthlySchedule";
import DailySchedule from "./pages/DailySchedule";
import InspectedProperties from "./pages/InspectedProperties";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import authenticationAPI from "./utils/authenticationAPI";

function App() {
  const [isAuthenticated, setAuthentication] = useState(false);

  useEffect(() => {
    authenticationAPI.authenticated()
      .then(res => {
        setAuthentication(res.data.isAuthenticated);
      })
      .catch(err => console.log(err));
  }, []);
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/reviews" component={Reviews} />
          <Route
            exact path="/login" 
            render={() => isAuthenticated ? 
              <Profile /> : 
              <Login />
            }
          />
          <Route
            exact path="/signup" 
            render={() => isAuthenticated ? 
              <Profile /> : 
              <Signup />
            }
          />
          <Route
            exact path="/profile" 
            render={() => isAuthenticated ? 
              <Profile /> : 
              <Redirect to="/login" />
            }
          />
          <Route
            exact path="/notes" 
            render={() => isAuthenticated ? 
              <Notes /> : 
              <Redirect to="/login" />
            }
          />
          <Route
            exact path="/monthly" 
            render={() => isAuthenticated ? 
              <MonthlySchedule /> : 
              <Redirect to="/login" />
            }
          />
          <Route
            exact path="/daily" 
            render={() => isAuthenticated ? 
              <DailySchedule /> : 
              <Redirect to="/login" />
            }
          />
          <Route
            exact path="/inspected"
            render={() => isAuthenticated ? 
              <InspectedProperties /> :
              <Redirect to="/login" />
            }
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
