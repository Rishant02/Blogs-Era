import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Signup from './Signup';
import Login from './Login';
import Account from './Account';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/account">
                <Account />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route path='/blogs/:id'>
                <BlogDetails />
              </Route>
              <Route path='*'>
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;