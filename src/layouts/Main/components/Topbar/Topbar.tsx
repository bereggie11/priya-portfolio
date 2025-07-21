import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {alpha, useTheme} from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import {NavItem} from './components';
import ThemeModeToggler from 'components/ThemeModeToggler';
import Link from '@mui/material/Link';
interface Props {
    // eslint-disable-next-line @typescript-eslint/ban-types
    onSidebarOpen : () => void;
    pages : {
        landings: Array < PageItem >;
        company: Array < PageItem >;
        account: Array < PageItem >;
        secondary: Array < PageItem >;
        blog: Array < PageItem >;
        portfolio: Array < PageItem >;
        about: Array < PageItem >;
    };
    colorInvert?: boolean;
}

const Topbar = ({
    onSidebarOpen,
    pages,
    colorInvert = false
} : Props) : JSX.Element => {
    const theme = useTheme();
    const {mode} = theme.palette;
    const {
        landings: landingPages,
        secondary: secondaryPages,
        company: companyPages,
        account: accountPages,
        portfolio: portfolioPages,
        blog: blogPages,
        about: aboutUs
    } = pages;

    return (
        <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            width={1}>
            {/* <Box
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
                    src={mode === 'light' && !colorInvert
                    ? require('../../../../assets/illustrations/icons8-bee-64.png')
                    : require('../../../../assets/illustrations/icons8-bee-64.png')}/>
            </Box> */}
            <Box
                sx={{
                display: {
                    xs: 'none',
                    md: 'flex'
                }
            }}
                alignItems={'center'}>
                {/* <Box marginLeft={4} minWidth={75}>
                    <Link underline="none" component="a" href="/demos" color="text.primary">
                        Features
                    </Link>
                </Box> */}
                {/* <Box marginLeft={4} minWidth={75}>
                    <Link underline="none" component="a" color="text.primary" onClick={()=>document.getElementById('pricing').scrollIntoView()}>
                        Pricing
                    </Link>
                </Box> */}
                {/* <Box marginLeft={4} minWidth={75}>
                    <NavItem
                        title={'About'}
                        id={'about-pages'}
                        items={aboutUs}
                        colorInvert={colorInvert}/>
                </Box> */}
                {/* <Box marginLeft={4}>
                    <ThemeModeToggler/>
                </Box> */}
                {/* <Box marginLeft={4}>
                    <NavItem
                        title={'Pages'}
                        id={'secondary-pages'}
                        items={secondaryPages}
                        colorInvert={colorInvert}/>
                </Box>
                <Box marginLeft={4}>
                    <NavItem
                        title={'Blog'}
                        id={'blog-pages'}
                        items={blogPages}
                        colorInvert={colorInvert}/>
                </Box>
                <Box marginLeft={4}>
                    <NavItem
                        title={'Portfolio'}
                        id={'portfolio-pages'}
                        items={portfolioPages}
                        colorInvert={colorInvert}/>
                </Box>*/}
                {/* <Box marginLeft={4}>
                    <Button
                        variant="contained"
                        color="primary"
                        component="a"
                        href={'/login'}
                        size="large">
                        Login
                    </Button>
                </Box> */}
            </Box>
            <Box
                sx={{
                display: {
                    xs: 'flex',
                    md: 'none'
                }
            }}
                alignItems={'center'}>
                <Button
                    onClick={() => onSidebarOpen()}
                    aria-label="Menu"
                    variant={'outlined'}
                    sx={{
                    borderRadius: 2,
                    minWidth: 'auto',
                    padding: 1,
                    borderColor: alpha(theme.palette.divider, 0.2)
                }}>
                    <MenuIcon/>
                </Button>
            </Box>
        </Box>
    );
};

export default Topbar;
