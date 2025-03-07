import { Box, Button, Container, Grid, IconButton, Typography } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import PlayerControls from '../PlayerControls/PlayerControls';

const PlayerOverlay = ({ playerOverLayIsOpen, closeOverlay, progress, is_paused, duration, player, current_track, active }) => {
	return (
		<Box
			id="PlayerOverlay"
			sx={{
				width: '100%',
				height: 'calc(100vh - 75px)',
				backgroundColor: 'background.paper',
				display: { xs: 'block', md: 'none' },
				position: 'fixed',
				top: 0,
				left: 0,
				transition: 'all 0.3s',
				transform: playerOverLayIsOpen ? 'translateY(0px)' : 'translateY(100vh)'
			}}
		>
			<Container sx={{ height: '100%', background: 'linear-gradient(0deg, #121212 0%, #39d47250 100%);' }}>
				<Grid container direction={'column'} justifyContent={'space-between'} sx={{ height: '100%' }}>
					<Grid item xs={1} sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
						<IconButton sx={{ paddingLeft: 0 }} onClick={closeOverlay}>
							{<KeyboardArrowDown fontSize="large" sx={{ color: 'text.primary' }} />}
						</IconButton>
					</Grid>
					<Grid
						xs={5}
						sx={{ backgroundImage: `url("${current_track?.album.images[0].url}")`, backgroundPosition: 'center', backgroundSize: 'cover' }}
						item
					></Grid>
                    <Grid item xs={1}>
                        <Typography sx={{color: 'text.primary', fontSize: 28}} >{current_track?.name}</Typography>
                        <Typography sx={{color: 'text.secondary', fontSize: 18}}>{current_track?.artists.map((artist) => artist.name).join(', ')}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                            {active ? (
                            <PlayerControls
                                progress={progress}
                                is_paused={is_paused}
                                duration={duration}
                                player={player}
                            />
                        ) : (
                            <Box>Please Transfer Playback</Box>
                        )}
                    </Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default PlayerOverlay;
