import { AccountCircle } from '@mui/icons-material';
import { Box, Card, Container, Divider, FormControl, IconButton, Input, InputAdornment, InputBase, InputLabel, List, ListItem, ListItemText, Paper, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Help = () => {
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
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
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
                        {
                            helpTopics.map(topic => {
                                return <ListItem key={topic.id} sx={{ p: 0, }}>
                                    <ListItemText primary={topic.text} sx={{
                                        '&>span': { fontSize: '0.9rem' }
                                    }} />
                                </ListItem>
                            })
                        }
                    </List>
                </Stack>
                {/* sofa card  */}
                <Card sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    bgcolor: 'transparent',
                    boxShadow: 'none',
                    mb: '1rem',
                    p: '1.5rem',
                    '&:hover': {
                        color: 'red',
                        cursor: 'pointer',
                        boxShadow: 5
                    }
                }}>
                    {/* <Chair sx={{ fontSize: '3rem' }} /> */}
                    <Typography component={'h3'} sx={{
                        fontWeight: 'bold'
                    }}>
                        Sofa
                    </Typography>
                </Card>
            </Container>
        </Container>
    );
};

export default Help;

const helpTopics = [
    {
        id: 1,
        text: 'My Account'
    },
    {
        id: 2,
        text: 'Before I buy'
    },
    {
        id: 3,
        text: 'Payments'
    },
    {
        id: 4,
        text: 'Warranty Services'
    },
    {
        id: 5,
        text: 'Interior Solutions'
    },
]