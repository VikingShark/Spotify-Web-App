import { useState, useEffect } from 'react';
import { Box, Divider } from '@mui/material';
import spotifyLogo from '/public/Spotify_Logo.png'
import NavItem from '../NavItem/NavItem';
import HomeIcon from '@mui/icons-material/Home';
import NavPlaylist from '../NavPlaylist/NavPLaylist';

const SideNav = ( {spotifyApi, token } ) => {

    useEffect(() => {
        async function getPlaylist() {
            if(!spotifyApi) return;

            const data = await spotifyApi.getUserPlaylists();
            console.log(data.body)
        }   

        getPlaylist();
    }, [spotifyApi, token]);
    
    return ( 
        <Box sx={{
            backgroundColor: 'background.default',
            width: 230,
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Box p={3}>
                <img src={spotifyLogo} alt="Spotify Logo" width={'75%'} />
            </Box>
            <NavItem name="Home" Icon={HomeIcon} target="/" />
            <Box px={3} py={1} >
                <Divider sx={{backgroundColor: '#ffffff40'}}/>
            </Box>
            <Box sx={{ overflowY: 'auto', flex: 1 }} >
            <NavPlaylist loading={false} name='pop' id='1' />
            </Box>
        </Box>
     );
}
 
export default SideNav;