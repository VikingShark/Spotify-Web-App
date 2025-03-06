import { Box, Button } from '@mui/material';
import villiamImg from '/public/Villiam.jpg'

const Home = () => {
    return ( 
        <Box sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 5
        }}>
            <img src={villiamImg} alt="Villiam" style={{ maxWidth: '50%', maxHeight: '50%'}} />
            <Button href="mailto:villiam.strannerklint@hotmail.com" size="large" variant="contained">
                Kontakta mig!
            </Button>
        </Box>
     );
}
 
export default Home;