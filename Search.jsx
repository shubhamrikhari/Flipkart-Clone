

import {InputBase, Box, styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const StyledBox = styled(Box)`
    background : #fff;
    margin-left : 20px;
    width : 38%;
    border-radius : 2px;
    display : flex;
`;
const StyledInput = styled(InputBase)`
    padding-left : 20px;
    width : 100%;
    font-size : unset;
`;

const StyledSearch = styled(SearchIcon)`
    margin-top : 4px;
    margin-right : 4px;
    color : blue;
    display : flex;
`;

const search = () => {
    return (
        <StyledBox> 
            <StyledInput placeholder='Search for Products, Brands and more'></StyledInput>
            <StyledSearch/>
        </StyledBox>
    )
};

export default search;