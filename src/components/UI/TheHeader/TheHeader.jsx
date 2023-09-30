import React, { useState } from "react";
import Link from "@mui/material/Link";
// Components
import {
    AppBar,
    Container,
    CssBaseline,
    Toolbar,
    Typography,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Button,
} from "@mui/material";
import Spacer from "../Spacer";

// Images
import theLogo from "../../../assets/images/redlineLogo.png";

//Icons
import MenuIcon from "@mui/icons-material/Menu";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

// Mocks
import pages from "../../../mock/pages.json";
const TheHeader = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <>
            <CssBaseline />
            <Spacer />
            <AppBar position="fixed">
                <Container maxWidth="xl" style={{ padding: "8px 0" }}>
                    <Toolbar disableGutters>
                        {/* Main Device Logo*/}
                        <Box
                            component="img"
                            src={theLogo}
                            alt="Petrol Logo"
                            width={50}
                            sx={{
                                display: { xs: "none", md: "flex" },
                                mr: 1,
                            }}
                        />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            Redline
                        </Typography>

                        {/* Main Device Menu */}
                        <Box
                            sx={{
                                flexGrow: 2,
                                display: { xs: "none", md: "flex" },
                                justifyContent: "center",
                                columnGap: "5px",
                            }}
                        >
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        color: "white",
                                        display: "block",
                                    }}
                                    className="HoverEffect"
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        {/* Main Device Icons */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                                columnGap: "8px",
                            }}
                        >
                            <Link
                                href="https://www.facebook.com/"
                                color="inherit"
                            >
                                <Facebook />
                            </Link>
                            <Link
                                href="https://www.instagram.com/"
                                color="inherit"
                                sx={{ pl: 1, pr: 1 }}
                            >
                                <Instagram />
                            </Link>
                            <Link
                                href="https://www.twitter.com/"
                                color="inherit"
                            >
                                <Twitter />
                            </Link>
                            <Link
                                href="https://www.twitter.com/"
                                color="inherit"
                            >
                                <LinkedIn />
                            </Link>
                        </Box>
                        {/* Small Device Menu */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "flex", md: "none" },
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                    >
                                        <Typography textAlign="center">
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        {/* Small Device Logo */}
                        <Box
                            component="img"
                            src={theLogo}
                            alt="Petrol Logo"
                            width={50}
                            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                        />

                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                display: { xs: "flex", md: "none" },
                                flexGrow: 1,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            Redline
                        </Typography>

                        {/* Small Device Icons */}
                        <Box
                            sx={{
                                flexGrow: 0,
                                display: { xs: "flex", md: "none" },
                                columnGap: "8px",
                                paddingRight: "10px",
                            }}
                        >
                            <Link
                                href="https://www.facebook.com/"
                                color="inherit"
                            >
                                <Facebook />
                            </Link>
                            <Link
                                href="https://www.instagram.com/"
                                color="inherit"
                                sx={{ pl: 1, pr: 1 }}
                            >
                                <Instagram />
                            </Link>
                            <Link
                                href="https://www.twitter.com/"
                                color="inherit"
                            >
                                <Twitter />
                            </Link>
                            <Link
                                href="https://www.twitter.com/"
                                color="inherit"
                            >
                                <LinkedIn />
                            </Link>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default TheHeader;
