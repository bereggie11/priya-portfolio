import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useTheme} from '@mui/material/styles';

import NavItem from './components/NavItem';

interface Props {
    pages : {
        landings: Array < PageItem >;
        company: Array < PageItem >;
        account: Array < PageItem >;
        secondary: Array < PageItem >;
        blog: Array < PageItem >;
        portfolio: Array < PageItem >;
    };
}

const SidebarNav = ({pages} : Props) : JSX.Element => {
    const theme = useTheme();
    const {mode} = theme.palette;

    const {
        landings: landingPages,
        secondary: secondaryPages,
        company: companyPages,
        account: accountPages,
        portfolio: portfolioPages,
        blog: blogPages
    } = pages;

    return (
        <Box>
            <Box width={1} paddingX={2} paddingY={1}>
                <Box
                    display={'flex'}
                    component="a"
                    href="/"
                    title="theFront"
                    width={{
                    xs: 100,
                    md: 120
                }}>
                    <Box
                        component={'img'}
                        width={'50px'}
                        height={'50px'}
                        src={mode === 'light'
                        ? require('../../../../../../assets/illustrations/icons8-bee-64.png')
                        : require('../../../../../../assets/illustrations/icons8-bee-64.png')}/>
                </Box>
            </Box>
            <Box paddingX={2} paddingY={2}>
                <Box>
                    <NavItem title={'Products'} items={landingPages}/>
                </Box>
                <Box>
                    <NavItem title={'Pricing'} items={companyPages}/>
                </Box>
                <Box>
                    <NavItem title={'About'} items={secondaryPages}/>
                </Box>
            </Box>
        </Box>
    );
};

export default SidebarNav;
