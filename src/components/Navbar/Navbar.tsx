import React, { useState } from "react";
import { useStyles } from "./styles";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Switch,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";
import { AccountCircle, BarChart } from "@material-ui/icons";
const Navbar: React.FC = () => {
  const classes = useStyles();
  const [auth, setauth] = useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setauth(event.target.checked);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Logout" : "Login"}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Box className={classes.navleft}>
            <IconButton>
              <BarChart className={classes.icon} />
            </IconButton>
            <Typography variant="h6" component="div">
              Ecommerce
            </Typography>
          </Box>

          {auth && (
            <Box>
              <IconButton color="inherit">
                <AccountCircle />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
