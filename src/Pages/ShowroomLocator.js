import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Divider, IconButton, InputBase, List, ListItem, ListItemText, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ShowroomLocator = () => {
    return (
        <Container maxWidth='100vw' sx={{
            width: '100%',
            bgcolor: 'white'
        }}>
            <Box sx={{
                textAlign: 'center',
                my: '2rem'
            }}>
                <Typography component={'h2'} sx={{
                    fontSize: '2rem'
                }} >Help Center</Typography>
                <Stack sx={{
                    alignItems: 'center'
                }}>
                    <Paper
                        component="form"
                        sx={{
                            p: '2px 4px',
                            display: 'flex',
                            alignItems: 'center',
                            width: 400,
                            my: '1rem'
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
                </Stack>
            </Box>
            <Divider />
            <Container
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                    gap: 8,
                    py: '2rem'
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
        </Container>
    );
};

export default ShowroomLocator;