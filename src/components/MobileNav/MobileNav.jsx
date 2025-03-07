import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, List } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MobileNav = ({}) => {
    const nav = useNavigate();
    const [value, setValue] = useState(0);

	return (
		<Box sx={{ display: { xs: 'block', md: 'none' }, color: 'text.secondary'}}>
			<BottomNavigation
				sx={{ backgroundColor: 'background.paper' }}
				showLabels
				value={value}
				onChange={(event, value) => setValue(value) }
			>
                <BottomNavigationAction label="Home" icon={<Home />} onClick={() => nav('/')} />
                <BottomNavigationAction label="Your Library" icon={<List />} onClick={() => nav('/library')} />
            </BottomNavigation>
		</Box>
	);
};

export default MobileNav;
