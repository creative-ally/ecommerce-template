import { Box, Button, Checkbox, Container, FormControlLabel, IconButton, InputBase, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import StoreBanner from '../../assets/Store_banner.png'
import ShowroomMap from './ShowroomMap';

const ShowroomLocator = () => {
    return (
        <Box maxWidth='100vw' sx={{
            width: '100%',
            bgcolor: 'white'
        }}>
            <Box sx={{
                textAlign: 'center',
                my: '2rem',
                color: 'white',
                p: '2rem',
                height: '25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                backgroundImage: `url("${StoreBanner}")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <Container sx={{
                    textAlign: 'start'
                }}>
                    <Typography component={'h2'} sx={{
                        fontSize: '2rem',
                    }} >Showroom Locator</Typography>
                    <Typography component={'span'}>Do find your nearest HATIL showroom conveniently.</Typography>
                </Container>
            </Box>

            {/* map and search area  */}
            <Container
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        sm: '4fr 8fr',
                        xs: '1fr'
                    },
                    justifyContent: 'flex-start',
                    my: '5rem',
                    px: '1rem',
                    height: '35.1rem',
                    width: '100%',
                    overflow: 'hidden',
                    border: '1px solid #e2e2e2',
                    '&.MuiContainer-root': {
                        p: '0'
                    }
                }}
            >
                <Stack>
                    <Stack sx={{
                        p: '2rem',
                        background: '#f6f6f6'
                    }}>
                        <Typography component={'h2'} sx={{
                            fontSize: '1.2rem',
                        }}>
                            Find Your Nearest Store
                        </Typography>
                        <Paper
                            component="form"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                width: 300,
                                my: '0.5rem'
                            }}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Type your queries here.."
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Corporate office" />
                            <Button variant='text' color='warning' sx={{
                                textTransform: 'inherit',

                            }}>Reset</Button>
                        </Box>
                    </Stack>

                    {/* search result area  */}
                    <Stack sx={{
                        p: '1.5rem',
                        pt: '2rem',
                        height: '100%',
                    }}>Hello</Stack>
                </Stack>

                {/* Shoroom map area  */}
                <Stack>
                    {/* shoowroom map  */}
                    <ShowroomMap />
                </Stack>
            </Container>
        </Box>
    );
};

export default ShowroomLocator;