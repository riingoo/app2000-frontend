import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Login from "./login";
import {Route} from "react-router-dom";
import Button from "@material-ui/core/Button";
import CategoryCard from "./feature/home/category-card";
import HomeContainer from "./feature/home/home-container";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import AssetContainer from "./feature/assets/asset-container";
import MyAssetsList from "./feature/profile/my-assets-list";
import NewAsset from "./feature/profile/new-asset";
import {useMediaQuery} from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },

    title: {
        flexGrow: 1,
        display: "inherit",
    },
}));

export default function MenuAppBar({authenticated}) {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(false);
    const theme = useTheme();
    const extraSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" className={classes.title}>
                        LåneLitt
                    </Typography>

                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"

                    >
                        <AccountCircle/>
                    </IconButton>
                    {!authenticated && (
                        <Button color="default" href="/login">Logg inn</Button>
                    )}
                </Toolbar>
            </AppBar>
            <main>
                <Box p={extraSmallScreen ? 1 : 3}>
                    <Route exact path="/" component={HomeContainer}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/category" componenet={CategoryCard}/>
                    <Route exact path="/assets" component={AssetContainer}/>
                    <Route exact path="/my/assets" component={MyAssetsList}/>
                    <Route exact path="/new/asset" component={NewAsset}/>
                </Box>

            </main>
        </div>
    );
}
