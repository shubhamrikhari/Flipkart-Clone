import {AppBar, Toolbar, Box, styled, Typography} from '@mui/material';
import Search from './Search';
import CustomButtons from './CustomButtons';
const StyledHeader = styled(AppBar)`
    background : #2874f0;
    height : 55px;
`;

const StyledBox = styled(Box)`
   margin-left : 12%;
   line-height : 0;
`;

const SubHeading = styled(Typography)`
    font-style : italic;
    font-size : 10px;
    margin-left : 4px;
`;

const SubImage = styled('img')`
    width : 10px;
    color : yellow;
    margin-left : 4px;
`;

const Wrapper = styled(Box)`
    margin : 0 5% 0 5%;
`;

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    <StyledHeader>
        <Toolbar style = {{minHeight : 55}}>
            <StyledBox>
                <img src={logoURL} alt="logo" style={{width : 75}}/>
                <Box style={{display : 'flex'}}>
                    <SubHeading>
                        Explore 
                        <Box component="span" style={{color : "yellow"}}> Plus</Box>
                    </SubHeading>
                    <SubImage src={subURL} alt="sublogo"></SubImage>
                </Box>
            </StyledBox>
            <Search />
            <Wrapper>
                <CustomButtons/>
            </Wrapper>
        </Toolbar>
    </StyledHeader>
  )
};

export default Header;
