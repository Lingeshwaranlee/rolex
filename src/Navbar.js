import AppBar from "@mui/material/AppBar";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import {GiQueenCrown} from 'react-icons/gi';
import { BiSearchAlt2} from 'react-icons/bi';
export function Navbar() {
  const history = useHistory();
  return (
    <div className="appbar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{backgroundColor:"black"}}>
          <Toolbar>
            <Button color="inherit" onClick={() => history.push("/")}>
            ROLEX <GiQueenCrown/> 
            </Button>
            <Button color="inherit" onClick={() => history.push("/watches")}>
              WATCHES
            </Button>
            <Button color="inherit" onClick={() => history.push("/world")}>
              WORLD OF ROLEX
            </Button>
            <Button color="inherit" style={{paddingLeft:"65%"}}>
            <BiSearchAlt2/>  SEARCH
            </Button>
            <Button color="inherit" onClick={() => history.push("/login")}>
             LOGIN
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
