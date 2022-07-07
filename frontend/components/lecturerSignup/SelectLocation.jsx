import { Box, FormHelperText, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { withTheme } from '@emotion/react';
import { useFormContext } from 'react-hook-form';
const axios = require('axios').default;

const SelectLocation = ({ theme, data }) => {
  const { register } = useFormContext(); // retrieve all hook methods

  const [listOflLocations, setListOflLocations] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=1500`
      )
      .then((response) => setListOflLocations(response.data.result.records));
  }, []);

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
        <FormControl sx={{ width: '100%', marginTop: '6px' }}>
          <Select
            {...register('location')}
            sx={{
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.purple,
              },
            }}
            size={'small'}
            value={location}
            onChange={handleChange}
            displayEmpty
          >
            <MenuItem value="" disabled>
              <em>רשימת ישובים</em>
            </MenuItem>
            {listOflLocations.length > 0 &&
              listOflLocations.map((item) => (
                <MenuItem key={item._id} value={item.שם_ישוב}>
                  {item.שם_ישוב}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default withTheme(SelectLocation);
