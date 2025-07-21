import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import {useTheme} from '@mui/material/styles';

const Footer = () : JSX.Element => {
    const theme = useTheme();
    const {mode} = theme.palette;

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    width={1}
                    flexDirection={{
                    xs: 'column',
                    sm: 'row'
                }}>
                    <Box display={'flex'} component="a" href="/" title="Priya.R Portfolio" width={80}>
                        <Box
                            component={'img'}
                            width={'50px'}
                            height={'50px'}
                            src={mode === 'light'
                            ? require('../../../../assets/illustrations/icons8-bee-64.png')
                            : require('../../../../assets/illustrations/icons8-bee-64.png')}/>
                    </Box>
                    <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
                        <Box marginTop={1} marginRight={2}>
                            <Link
                                underline="none"
                                component="a"
                                href="/"
                                color="text.primary"
                                variant={'subtitle2'}>
                                Home
                            </Link>
                        </Box>
                        <Box marginTop={1} marginRight={2}>
                            <Link
                                underline="none"
                                component="a"
                                href="/docs/introduction"
                                color="text.primary"
                                variant={'subtitle2'}>
                                Products
                            </Link>
                        </Box>
                        <Box marginTop={1}>
                            <Button
                                variant="outlined"
                                color="primary"
                                component="a"
                                target="blank"
                                href="https://mui.com/store/items/the-front-landing-page/"
                                size="small">
                                Pricing
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Typography
                    align={'center'}
                    variant={'subtitle2'}
                    color="text.secondary"
                    gutterBottom>
                    &copy; Priya R. {new Date().getFullYear()}. All rights reserved
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Footer;
