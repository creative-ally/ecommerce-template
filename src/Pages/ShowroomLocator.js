import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Divider, IconButton, InputBase, List, ListItem, ListItemText, Paper, Stack, Typography } from '@mui/material';
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
            <Divider />
            <Container
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '4fr 8fr',
                    justifyContent: 'flex-start',
                    py: '2rem',
                    height: '35.1rem'
                }}
            >
                <Stack sx={{ mr: '5rem' }}>
                    <Typography component={'h2'} sx={{
                        fontSize: '1.2rem',
                        mb: '1rem'
                    }}>
                        Help Topics
                    </Typography>
                    <List component="nav" aria-label="mailbox folders">
                        {/* {
                            helpTopics.map(topic => {
                                return <ListItem key={topic.id}
                                    onClick={() => setHelpTopic(topic)}
                                    sx={{
                                        p: 0, cursor: 'pointer'
                                    }}>
                                    <ListItemText primary={topic.text} sx={{
                                        '&>span': { fontSize: '0.9rem' }
                                    }} />
                                </ListItem>
                            })
                        } */}
                    </List>
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