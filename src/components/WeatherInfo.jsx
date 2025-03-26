import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

const WeatherInfo = ({ weather }) => {
  if (!weather) return null;

  return (
    <Box component="span" sx={{ ml: 1 }}>
      <Tooltip title={`${weather.description} in ${weather.city}`}>
        <Typography variant="caption" component="span">
          {weather.temp}°C
        </Typography>
      </Tooltip>
    </Box>
  );
};

export default WeatherInfo;