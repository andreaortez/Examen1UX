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
    const [bgColor, setBgColor] = React.useState('transparent');

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setBgColor('#151515');
        } else {
            setBgColor('transparent');
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

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
            backgroundColor: bgColor,
            boxShadow: 'none',
            textTransform: 'none',
            transition: 'background-color 0.3s ease'
        }}>
            {/* Capa oscura en degradado*/}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
                    zIndex: 0,
                }}
            ></div>
            <Container maxWidth="xl" sx={{ width: '100vw' }}>
                <Toolbar disableGutters >
                    <IconButton sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                            alt="Logo"
                            style={{ width: 100, height: 30 }}
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
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                '& .MuiPaper-root': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.85)',
                                    color: 'white',
                                },
                            }}
                        >
                            {
                                pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                    </MenuItem>
                                ))
                            }
                        </Menu>
                    </Box>
                    <IconButton sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                            alt="Logo"
                            style={{ width: 125, height: 40 }}
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
                            zIndex: 2,
                        }}
                    >
                    </Typography>
                    {/* Elementos del appbar */}
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
                                    fontSize: { xs: '0.775rem', md: '0.67rem', lg: '0.85rem' },
                                    padding: '1%',
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Button sx={{ minWidth: 5, padding: 1 }}>
                        < img src="/imagenes/busqueda.png" alt="Buscar"
                            style={{ width: 25, height: 25 }}
                        />
                    </Button>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button sx={{ minWidth: 5, padding: 1, color: 'white', textTransform: 'none' }}>
                            <p>Niños</p>
                        </Button>
                    </Box>
                    <Button sx={{ minWidth: 5, padding: 1 }}>
                        <img src="/imagenes/notificacion.png" alt="Notificaciones"
                            style={{ width: 25, height: 25 }}
                        />
                    </Button>
                    {/* avatar */}
                    <Box sx={{ flexGrow: 0, position: 'relative' }}
                    >
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                                <Avatar alt="Remy Sharp" src="/imagenes/icon.png" sx={{ borderRadius: '10%' }} />
                                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                    {isMenuOpen ? (
                                        <ArrowDropUpIcon sx={{ color: 'white', ml: 1 }} />
                                    ) : (
                                        <ArrowDropDownIcon sx={{ color: 'white', ml: 1 }} />
                                    )}
                                </Box>
                            </IconButton>
                        </Tooltip>
                        {/* menu desplegable del avatar */}
                        <Menu
                            sx={{
                                mt: '45px',
                                '& .MuiPaper-root': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.85)',
                                    color: 'white',
                                },
                            }}
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