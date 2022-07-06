import { Box, FormHelperText, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectLocation = () => {
  const [location, setLocation] = useState('');

  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  const styles = {
    box: {
      display: 'flex',
      textAlign: 'right',
    },
    boxSelect: {
      width: '100%',
      textAlign: 'right',
    },
  };
  return (
    <Box>
      <Box css={styles.box}>
        <Image
          src="/locationIcon.svg"
          width={'18'}
          height={'18'}
          alt="Location icon"
        />
        &nbsp;
        <Typography variant="body1">מקום מגורים</Typography>
      </Box>
      <Box styles={styles.boxSelect}>
        <FormControl sx={{ width: '100%' }}>
          <Select value={location} onChange={handleChange} displayEmpty>
            <MenuItem value="" disabled>
              <em>רשימת ישובים</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default SelectLocation;
