import './App.css';
import { Box } from '@mui/material';
import Dashboard from './components/dashboard/Dashboard';
import Login from './pages/Login'

function App({ spotifyApi } ) {
	return (
		<Box className="App"  >
			<Login />
			<Dashboard spotifyApi={spotifyApi} />
		</Box>
	);
}

export default App;
