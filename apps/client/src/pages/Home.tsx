import { Grid, Link as MuiLink, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const [homeName, setHomeName] = useState<string | null>(null);
  const [homeEmail, setHomeEmail] = useState<string | null>(null);
  const { name, email } = location.state || {};

  useEffect(() => {
    setHomeName(name);
    setHomeEmail(email);
  }, [email, name]);

  const handleOnclick = () => {
    setHomeEmail(null);
    setHomeName(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4">Welcome to the application.</Typography>
      {homeName && <Typography variant="h5">Name: {homeName}</Typography>}
      {homeEmail && <Typography variant="h5">Email: {homeEmail}</Typography>}
      {homeName && !homeEmail && (
        <Typography variant="h6">
          Please Login Now{" "}
          <MuiLink component={Link} to="/login">
            Login
          </MuiLink>
        </Typography>
      )}
      {!homeName && !homeEmail && (
        <Grid container justifyContent="flex-end" sx={{ marginTop: 2 }}>
          <Grid item>
            <Typography variant="body1">
              Don't have an account?{" "}
              <MuiLink component={Link} to="/register">
                Register
              </MuiLink>
            </Typography>
          </Grid>
        </Grid>
      )}
      {!homeName && !homeEmail && (
        <Grid container justifyContent="flex-end" sx={{ marginTop: 1 }}>
          <Grid item>
            <Typography variant="body1">
              Already have an account?{" "}
              <MuiLink component={Link} to="/login">
                Login
              </MuiLink>
            </Typography>
          </Grid>
        </Grid>
      )}
      {homeName && homeEmail ? (
        <Button
          variant="outlined"
          onClick={handleOnclick}
          sx={{ marginTop: 2 }}
        >
          Log out
        </Button>
      ) : null}
    </div>
  );
};

export default Home;
