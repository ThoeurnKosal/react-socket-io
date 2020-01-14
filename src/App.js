import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListBookComponent from "./component/book/ListBookComponent";
import AddBookComponent from "./component/book/AddBookComponent";
// import EditUserComponent from "./component/user/EditUserComponent";

function App() {
  return (
      <div className="container">
          <Router>
              <div className="col-md-6">
                  <h1 className="text-center" style={style}>React User Application</h1>
                  <Switch>
                      <Route path="/" exact component={ListBookComponent} />
                      <Route path="/books" component={ListBookComponent} />
                      <Route path="/add-book" component={AddBookComponent} />
                      {/* <Route path="/edit-user" component={EditUserComponent} />  */}
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;
