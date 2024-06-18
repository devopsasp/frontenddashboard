import React from "react";
import { useState } from "react";
import { Grid } from "@mui/material";
import { FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
const Loginpage = () => {
  const [register, setregister] = useState("");
  const [login, setlogin] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("register:", register);
    console.log("login:", login);
  };
  return (
    <div>
      <Grid container justifyContent="center" style={{ marginTop: 50 }}>
        <Grid item xs={8}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h5" align="center" gutterBottom>
              login
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormControl variant="outlined" fullWidth>
                    <Grid item xs={12} sm={6}>
                      <label>Enter User Name</label>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        value={register}
                        onChange={(e) => setregister(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <label>Enter Password</label>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        value={login}
                        onChange={(e) => setlogin(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth>
                        Login
                      </Button>
                    </Grid>
                  </FormControl>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Loginpage;
