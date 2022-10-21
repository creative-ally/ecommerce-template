import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, Container, Divider, FormControlLabel, IconButton, InputBase, List, ListItem, ListItemText, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StoreBanner from '../assets/Store_banner.png'

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
                    gridTemplateColumns: '4fr 8fr',
                    justifyContent: 'flex-start',
                    my: '5rem',
                    height: '35.1rem',
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

                {/* Order Queries  */}
                <Stack>
                    <Typography component={'h2'} sx={{
                        fontSize: '1.2rem',
                        mb: '1rem',
                        flexDirection: 'row'
                    }}>
                        My Order Queries
                    </Typography>
                    <Accordion disableSpacing={true} sx={{ maxWidth: 800, boxShadow: 'none' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            {/* <Typography>{helpTopic.text || 'My Account'}</Typography> */}
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {/* {
                                    helpTopic.description || 'Once I sign-in and be a regular follower, I won’t be missing out on all the new arrivals and exciting promotions.'
                                } */}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Stack>
            </Container>
        </Box>
    );
};

export default ShowroomLocator;