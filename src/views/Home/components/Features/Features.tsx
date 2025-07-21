/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import {useTheme} from '@mui/material/styles';

const Features = () : JSX.Element => {
    const theme = useTheme();

    return (
        <Box>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Box height={1} width={1} display={'flex'} justifyContent={'center'}>
                        <Box
                            height={1}
                            width={1}
                            maxWidth={{
                            xs: 500,
                            md: '100%'
                        }}
                            maxHeight={600}>
                            <Box
                                component={'img'}
                                src={require('../../../../assets/illustrations/solution2.png')}
                                width={1}
                                height={1}
                                sx={{
                                filter: theme.palette.mode === 'dark'
                                    ? 'brightness(0.8)'
                                    : 'none'
                            }}/>
                        </Box>
                    </Box>
                </Grid>
                <Grid item container alignItems={'center'} xs={12} md={6}>
                    <Box>
                        <Box marginBottom={2}>
                            <Typography
                                variant={'h4'}
                                sx={{
                                fontWeight: 700
                            }}
                                gutterBottom>
                                The solution provides an all-in-one package to support an
                            </Typography>
                        </Box>
                        <Grid container spacing={1}>
                            {[
                                'Intuitive digital home for employees to get guidance and help as they need it.', 'Tenured expert views where they can easily map their valuable knowledge to share' +
                                        ' with everyone.',
                                'Simplified methods to manage search, guided help & flows without front-line inte' +
                                        'raction with experts',
                                'Makes better use of the few experts available, empowering your entire staff to b' +
                                        'e more successful',
                                'Time & motion reporting export and views to enable better decisions and continua' +
                                        'l improvement'
                            ].map((item, i) => (
                                <Grid item xs={12} key={i}>
                                    <Box component={ListItem} disableGutters width={'auto'} padding={0}>
                                        <Box component={ListItemAvatar} minWidth={'auto !important'} marginRight={2}>
                                            <Box
                                                component={Avatar}
                                                bgcolor={theme.palette.secondary.main}
                                                width={20}
                                                height={20}>
                                                <svg
                                                    width={12}
                                                    height={12}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"/>
                                                </svg>
                                            </Box>
                                        </Box>
                                        <ListItemText primary={item}/>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Features;
