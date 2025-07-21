import React from 'react';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
// import LandingIllustration from 'assets/illustrations/landing.svg';


const Hero = () : JSX.Element => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {defaultMatches: true});

    return (
        <Box
            bgcolor={'alternate.main'}
            padding={{
            xs: 2,
            md: 4
        }}
            borderRadius={2}>
            <Grid container spacing={4}>
                <Grid
                    item
                    container
                    xs={12}
                    md={6}
                    alignItems={'center'}
                    sx={{
                    position: 'relative'
                }}>
                    <Box
                        data-aos={isMd
                        ? 'fade-right'
                        : 'fade-up'}
                        marginBottom={4}>
                        <Box marginBottom={2}>
                            <Typography
                                variant="h3"
                                component={'h3'}
                                sx={{
                                fontWeight: 700
                            }}>
                                Go Bee Good
                            </Typography>
                        </Box>
                        <Box marginBottom={3}>
                            <Typography variant="h6" component="p" color="text.secondary">
                                The opportunity to improve our bottom-line is to tackle unnecessary costs that
                                occur while trying to execute tasks at the speed of change and complexity.
                            </Typography>
                        </Box>
                        
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box height={1} width={1} display={'flex'} justifyContent={'center'}>
                        <Box
                            height={1}
                            width={1}
                            maxWidth={{
                            xs: 600,
                            md: '100%'
                        }}
                            maxHeight={500}>
                            <Box
                                component={'img'}
								src= {require('../../../../assets/illustrations/landing.png')}
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
            </Grid>
        </Box>
    );
};

export default Hero;
