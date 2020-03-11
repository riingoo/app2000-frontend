import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {Box} from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    pos: {
        marginBottom: 12,
    },
});

const Login = () => {

    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginFailed, setLoginFailed] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);

    function login() {
        fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
            .then(result => {
                if (result.status === 200) {
                    console.log("Login successful");
                    setLoginFailed(false);
                    setAuthenticated(true);
                } else {
                    console.log("Login failed");
                    setLoginFailed(true);
                    setAuthenticated(false);
                }
            })
    }

    if (authenticated) {
    }

    return (
        <div>
            <Card className={classes.card} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} variant="h6">
                        Logg inn
                    </Typography>
                    {loginFailed && <Box>Dette gikk ikke så bra </Box>}
                    <Box display="flex" flexDirection="column">
                        <TextField onChange={(event) => setUsername(event.target.value)} id="standard-basic"
                                   label="Brukernavn"/>
                        <TextField
                            onChange={(event) => setPassword(event.target.value)}
                            id="standard-password-input"
                            label="Passord"
                            type="password"
                            autoComplete="current-password"
                        />
                    </Box>
                    <Button size="small" onClick={() => login()}
                    >Logg inn

                    </Button>


                </CardContent>
            </Card>
        </div>
    );
};

export default Login;