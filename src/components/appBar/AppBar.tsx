import { Button, ButtonGroup, makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import MoreIcon from "@mui/icons-material/MoreVert";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Fragment } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useAddressBookData } from "../../context/AddressBookDataContext";
import { useInitialData } from "../../context/InitialDataContext";
import theme from "../../theme";
import { Filters } from "./filters/Filters";
import { SearchBar } from "./SearchBar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FFFFFF"
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  }
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const history = useHistory();

  let { index } = useParams();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const { initialList } = useInitialData();
  const {
    contactList,
    setGenderFilter,
    setAlphaFilter,
    setContactList
  } = useAddressBookData();

  const handleNavNext = () => {
    history.push(`/${Number(index) + 1}`);
  };

  const handleNavLast = () => {
    history.push(`/${Number(index) - 1}`);
  };

  const handleMobileMenuClose = () => {
    // If the filter modal is closed without any filters selected, set the list back to the initial state
    if (!contactList || contactList.length === 0) {
      setContactList(initialList);
    }
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setGenderFilter({ male: false, female: false });
    setAlphaFilter([]);
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu-mobile";
  const renderMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Button onClick={handleMobileMenuClose} style={{ float: "right" }}>
        <CloseIcon />
      </Button>
      <Filters />
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        className={classes.root}
        id="back-to-top-anchor"
      >
        <Toolbar className={classes.root}>
          <Link to={`/`} className={classes.link}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: { sm: "block" },
                color: theme.palette.primary.main
              }}
            >
              Address book
            </Typography>
          </Link>

          {/* Search and filters will not render on details page */}
          {!index && (
            <Fragment>
              <SearchBar />
              <Box sx={{ flexGrow: 1 }}></Box>
              <Typography
                sx={{
                  display: { xs: "none", sm: "block" },
                  color: theme.palette.primary.main
                }}
              >
                Count {contactList ? contactList.length : "0"}
              </Typography>
              <Box>
                <IconButton
                  size="large"
                  aria-controls={menuId}
                  onClick={handleMobileMenuOpen}
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Fragment>
          )}

          {index && (
            <Fragment>
              <Box sx={{ flexGrow: 1 }}></Box>
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button
                  color="primary"
                  size="small"
                  style={{ width: 80 }}
                  onClick={handleNavLast}
                  disabled={index === "0"}
                >
                  <KeyboardArrowLeftIcon /> Last
                </Button>
                <Button
                  color="primary"
                  size="small"
                  style={{ width: 80 }}
                  onClick={handleNavNext}
                  disabled={index === "499"}
                >
                  Next <NavigateNextIcon />
                </Button>
              </ButtonGroup>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
