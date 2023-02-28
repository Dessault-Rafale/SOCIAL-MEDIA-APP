import { Avatar } from '@mui/material'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));




export const world = [{
    img5: <StyledBadge id="online" color="success" overlap="circular" badgeContent=" ">
        <Avatar id="badge1"
            alt="Remy Sharp"
            src="/Assets/scarlet.jpg"
            sx={{ width: 45, height: 45 }} />
          </StyledBadge>,
    name1: "Alexandra"
},
{
img5: <StyledBadge id="online" color="success" overlap="circular" badgeContent=" ">
        <Avatar id="badge1"
            alt="Remy Sharp"
            src="/Assets/johny.jpg"
            sx={{ width: 45, height: 45 }} />
          </StyledBadge>,
    name1: "Jack Sparrow"
},
{
    img5: <StyledBadge id="online" color="success" overlap="circular" badgeContent=" ">
        <Avatar id="badge1"
            alt="Remy Sharp"
            src="/Assets/wick.jpg"
            sx={{ width: 45, height: 45 }} />
          </StyledBadge>,
    name1: "John Wick"
},
{
    img5: <StyledBadge id="online" color="success" overlap="circular" badgeContent=" ">
        <Avatar id="badge1"
            alt="Remy Sharp"
            src="/Assets/rock.jpg"
            sx={{ width: 45, height: 45 }} />
          </StyledBadge>,
    name1: "Dwayne Johnson"
},
{
    img5: <StyledBadge id="online" color="success" overlap="circular" badgeContent=" ">
        <Avatar id="badge1"
            alt="Remy Sharp"
            src="/Assets/scarlet.jpg"
            sx={{ width: 45, height: 45 }} />
          </StyledBadge>,
    name1: "Natasha"
},
{
    img5: <StyledBadge id="online" color="success" overlap="circular" badgeContent=" ">
        <Avatar id="badge1"
            alt="Remy Sharp"
            src="/Assets/henry.jpg"
            sx={{ width: 45, height: 45 }} />
          </StyledBadge>,
    name1: "Henry Cavin"
},
{
    img5: <StyledBadge id="online" color="success" overlap="circular" badgeContent=" ">
        <Avatar id="badge1"
            alt="Remy Sharp"
            src="/Assets/wick.jpg"
            sx={{ width: 45, height: 45 }} />
          </StyledBadge>,
    name1: "John Wick"
}]