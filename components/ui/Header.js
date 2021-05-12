import React, {useState} from 'react';
import Link from 'next/link';

// * UI
import {makeStyles, AppBar, Toolbar, Menu, MenuItem, Typography, Button} from '@material-ui/core';

// * i18n
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme) => ({
        toolbar: {
            display: 'flex',
            flex: 1,
            justifyContent: 'space-between'
        }
    })
);

// ! Main function
export default function Header() {

    const [anchorElement, setAnchorElement] = useState(null);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    // * i18n
    const {i18n} = useTranslation();

    // * Handling the Language Menu
    const handleMenuOpen = (e) => {
        setAnchorElement(e.currentTarget);
        setOpen(true);
    }

    const handleMenuClick = (languageCode) => (e) => {
        setAnchorElement(null);
        setOpen(false);
        console.log('Chosen language = ', languageCode);
        i18n.changeLanguage(languageCode).then(()=>{})
    }
    const handleMenuClose = (e) => {
        setAnchorElement(null);
        setOpen(false);
    }


    return (
        <React.Fragment>
            <AppBar>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6">i18n Testing</Typography>
                    <Button color="inherit" onClick={event => {handleMenuOpen(event)}}>Switch Language</Button>
                    <Menu
                        id="language-menu"
                        anchorEl={anchorElement}
                        open={open}
                        onClose={handleMenuClose}
                        keepMounted
                        getContentAnchorEl={null}
                        anchorOrigin={{ vertical: "bottom", horizontal: "center"}}
                        transformOrigin={{vertical: "top", horizontal: "center"}}
                    >
                        <MenuItem onClick={handleMenuClick('en-US')}>English</MenuItem>
                        <MenuItem onClick={handleMenuClick('fr-FR')}>Francais</MenuItem>
                        <MenuItem onClick={handleMenuClick('nl-NL')}>Nederlands</MenuItem>
                    </Menu>
                </Toolbar>

            </AppBar>
        </React.Fragment>
    )
}
