import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const pages = ['Inicio', 'Series', 'Películas', 'Novedades Populares', 'Mi Lista', 'Explora por idiomas'];
const settings = ['Administrar perfiles', 'Transferir perfil', 'Cuenta', 'Cerrar sesión'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
        setIsMenuOpen(!isMenuOpen);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <AppBar position="fixed" sx={{
            backgroundColor: 'transparent', boxShadow: 'none', textTransform: 'none',
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <IconButton sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                            alt="Logo"
                            style={{ width: 130, height: 40 }}
                        />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                        }}
                    >
                    </Typography>

                    {/* Menú de usuario */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <IconButton sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                            alt="Logo"
                            style={{ width: 130, height: 40 }}
                        />
                    </IconButton>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                    textTransform: 'none',
                                    backgroundColor: 'transparent',
                                    '&:hover': {
                                        color: '#adaeae',
                                    },
                                    transition: 'color 0.3s ease',
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{
                        flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', marginRight: 2,
                    }}>
                        <Button sx={{ minWidth: 5, padding: 1 }}>
                            < img src="/imagenes/busqueda.png" alt="Buscar"
                                style={{ width: 25, height: 25 }}
                            />
                        </Button>
                        <Button sx={{ minWidth: 5, padding: 1, color: 'white', textTransform: 'none' }}>
                            <p>Niños</p>
                        </Button>
                        <Button sx={{ minWidth: 5, padding: 1 }}>
                            <img src="/imagenes/notificacion.png" alt="Notificaciones"
                                style={{ width: 25, height: 25 }}
                            />
                        </Button>
                    </Box>

                    {/* avatar */}
                    <Box sx={{ flexGrow: 0, position: 'relative' }}
                    >
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/imagenes/icon.png" sx={{ borderRadius: '10%' }} />
                                {isMenuOpen ? (
                                    <ArrowDropUpIcon sx={{ color: 'white', ml: 1 }} />
                                ) : (
                                    <ArrowDropDownIcon sx={{ color: 'white', ml: 1 }} />
                                )}
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}
export default ResponsiveAppBar;