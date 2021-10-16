import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import './Style.css'

const useStyle = makeStyles({
  header: {
    background: "rgb(40, 152, 172)",
    borderRadius:"0.5rem"
  }
})

const Navbar = () => {
  const classes = useStyle()
    return (
        <>
          <AppBar className={classes.header} position="static">
            <Toolbar >
              <NavLink variant="h2" className="tool" to="/" exact>Home Page</NavLink>
              <NavLink className="tool" to="/all" exact>All Users</NavLink>
              <NavLink className="tool" to="/add" exact>Add Users</NavLink>
            </Toolbar>
          </AppBar>
        </>
    )
}

export default Navbar
