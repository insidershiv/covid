import React, { useEffect, useState } from 'react';
import { AppBar, IconButton, Menu, MenuItem, MuiThemeProvider, responsiveFontSizes, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'


function Header(props) {

    const useStyles = makeStyles((theme) => ({

        toolbarMargin: {
            ...theme.mixins.toolbar
        },
        tabContainer: {
            marginLeft: 'auto'
        },

        appbarBackground: {

            [theme.breakpoints.down('xs')]: {
                justify: "center",
                align: "center",
                alignItems: 'center'
            }
        },
        tab: {
            // color: 'purple',
            fontFamily: 'Lato',
            fontWeight: 700,
            textTransform: 'none',
            minWidth: 40,
            width: 140

            // [theme.breakpoints.down('xs')]:{
            //     marginTop:'1em',
            //     fontSize:'1.5rem',
            //     fontWeight:400
            // }



        }



    }));



    const classes = useStyles();
    let theme = useTheme();
    theme = responsiveFontSizes(theme);
    const matches = useMediaQuery(theme.breakpoints.down("xs"));
    const [value, setValue] = useState(0);

    const handleChange = (event, value) => {

        setValue(value);
    }

    useEffect(() => {

        if (window.location.pathname === '/' && value !== 0) {
            setValue(0)
        } else if (window.location.pathname === '/templates' && value !== 1) {
            setValue(1)
        } else if (window.location.pathname === '/about' && value !== 2) {
            setValue(2)
        } else if (window.location.pathname === '/suggestion' && value !== 3) {
            setValue(3)
        }
    }, [value])
    return (
        <>
            <MuiThemeProvider theme={theme}>


                <AppBar className={classes.appbarBackground} position="fixed" elevation={0} >
                    <Toolbar disableGutters>

                        <Tabs className={classes.tabContainer} indicatorColor="primary" value={value} onChange={handleChange} >
                            <Tab label="Home" component={Link} to="/" classes={{ root: classes.tab }} disableRipple />
                            <Tab label="Donate Plasma" component={Link} to="/donate-plasma" classes={{ root: classes.tab }} disableRipple />
                            <Tab label="Request Plasma" component={Link} to="/request=plasma" classes={{ root: classes.tab }} disableRipple />
                            <Tab label="Suggestion" component={Link} to="/suggestion" classes={{ root: classes.tab }} disableRipple style={{ marginRight: matches ? '3em' : undefined }} />
                            <Tab label="About Us" component={Link} to="/about" classes={{ root: classes.tab }} disableRipple style={{ marginRight: matches ? '3em' : undefined }} />
                        </Tabs>

                    </Toolbar>
                </AppBar>
                <div className={classes.toolbarMargin}></div>
            </MuiThemeProvider>
        </>


    );
}

export default Header
