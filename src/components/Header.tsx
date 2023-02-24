import {useRouter} from "next/router";
import {AppBar, Box, Button, Typography} from '@mui/material';

const pages = [
    {label: 'Home', path: "/"},
    {label: 'Users', path: "/users"},
    {label: 'Posts', path: '/posts'},
];

const AppHeader = () => {
    const router = useRouter();
    return (
        <AppBar position="static" sx={{px:1}}>
            <Box sx={{display: 'flex',alignItems:'center'}}>
                <Typography
                    variant="h6"
                    component="a"
                    sx={{
                        mr: 2,
                        display: {xs: 'none', md: 'flex'},
                        color: 'inherit',
                    }}
                >
                    Next.js example app with route loading
                </Typography>
                <Box sx={{ display:'flex'}}>
                    {pages.map((page) => (
                        <Button
                            key={page.label}
                            color={'inherit'}
                            sx={{my: 2,display: 'block',textTransform:'none'}}
                            onClick={() => router.push(page.path)}
                        >
                            {page.label}
                        </Button>
                    ))}
                </Box>
            </Box>
        </AppBar>
    );
}

export default AppHeader;