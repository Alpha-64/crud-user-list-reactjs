
import Navbar from "./Components/Navbar";
import UserList from "./Components/UserList";
import AllUsers from "./Components/AllUsers";
import AddUser from "./Components/AddUser";
import ErrorPage from "./Components/ErrorPage";
import { Route,Switch, BrowserRouter } from "react-router-dom";
import UserEdit from "./Components/UserEdit";

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Switch>
      <Route exact path="/" component={UserList} />
      <Route exact path="/all" component={AllUsers} />
      <Route exact path="/add" component={AddUser} />
      <Route exact path="/edit/:id" component={UserEdit} />
      <Route path="" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
