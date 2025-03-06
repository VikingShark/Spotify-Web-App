import {Box, Button} from '@mui/material';
import {accessURL} from '../config/config';
import spotifyLogo from '/public/Spotify_Logo.png';

const Login = () => {
    return ( 
        <Box sx={{
			backgroundColor: 'background.paper',
			height: '100vh',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column'
		}}>
            <img src={spotifyLogo} alt="Spotify Logo" style={{marginBottom: '300px', width: '70%', maxWidth: '500px'}} />
            <Button variant='contained' color="primary" size="large" href={accessURL} >
                Login to Spotify
            </Button>
        </Box>
     );
}
 
export default Login;
