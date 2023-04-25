
import React from 'react'
import {Box, Typography, styled} from '@mui/material'
import {navData} from '../../constants/data';

const StyledBox = styled(Box)`
    display : flex;
    margin : 65px 130px 0 130px;
    justify-content : space-between;
`;

const StyledBox2 = styled(Box)`
    padding : 12px 8px;
    text-align : center;
`;

const Text = styled(Typography)`
    font-weight : 600;
    font-family : inherit;
    font-size : 14px;
`;
const Navbar = () => {
  return (
    <StyledBox >
        {
            navData.map((ele) => (
                <StyledBox2>
                    <img src={ele.url} alt="img" style={{width : 65}}/>
                    <Text>{ele.text}</Text>
                </StyledBox2>
            ))
        }
    </StyledBox >
  )
}

export default Navbar;
