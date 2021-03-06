import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import ListingResults from "./pages/ListingResults";
import SingleListing from "./pages/SingleListing";
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
import "./App.css";

function App() {
  const [isAuthenticated, setAuthentication] = useState(false);
  const [userId, setUserId] = useState();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    authenticationAPI.authenticated()
      .then(res => {
        setAuthentication(res.data.isAuthenticated);
        setUserId(res.data.id);
        console.log(res.data)
        setUserInfo({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.email
        })
      })
      .catch(err => console.log(err));
  }, []);

  const userIsLoggedIn = (res) => {
    setAuthentication(true);
    setUserId(res.data.id);
    setUserInfo({
      firstName: res.data.firstName,
      lastName: res.data.lastName,
      email: res.data.email,
    })
  };
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/results" component={ListingResults} />
          <Route exact path="/listing"
            render={() => isAuthenticated ? 
              <SingleListing
                id={userId}
              /> : 
              <SingleListing
                id=""
              />
            }
          />
          <Route
            exact path="/login" 
            render={() => isAuthenticated ? 
              <Redirect to="/profile" /> : 
              <Login
                onSuccess={userIsLoggedIn}
              />
            }
          />
          <Route
            exact path="/signup" 
            render={() => isAuthenticated ? 
              <Redirect to="/profile" /> : 
              <Signup 
                onSuccess={userIsLoggedIn}
              />
            }
          />
          <Route
            exact path="/profile" 
            render={() => isAuthenticated ? 
              <Profile
                id={userId}
                info={userInfo}
              /> : 
              <Redirect to="/login" />
            }
          />
          <Route
            exact path="/notes" 
            render={() => isAuthenticated ? 
              <Notes 
                id={userId}
              /> : 
              <Redirect to="/login" />
            }
          />
          <Route
            exact path="/monthly" 
            render={() => isAuthenticated ? 
              <MonthlySchedule
                id={userId}
              /> : 
              <Redirect to="/login" />
            }
          />
          <Route
            exact path="/daily" 
            render={() => isAuthenticated ? 
              <DailySchedule
                id={userId}
              /> : 
              <Redirect to="/login" />
            }
          />
          <Route
            exact path="/inspected"
            render={() => isAuthenticated ? 
              <InspectedProperties 
                id={userId}
              /> :
              <Redirect to="/login" />
            }
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
