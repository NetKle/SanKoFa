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

const SelectWithTypography = ({
  theme,
  name,
  placeholder,
  nameOfField,
  title,
  url,
  imageSrc,
}) => {
  const { register } = useFormContext(); // retrieve all hook methods

  const [list, setList] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    axios.get(url).then((response) => setList(response.data));
  }, []);
  const handleChange = (event) => {
    setValue(event.target.value);
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
        {imageSrc && (
          <>
            <Image
              src={imageSrc}
              width={'18'}
              height={'18'}
              alt={`${name} icon`}
            />
            &nbsp;
          </>
        )}
        <Typography variant="body1">{title}</Typography>
      </Box>
      <Box styles={styles.boxSelect}>
        <FormControl sx={{ width: '100%', marginTop: '6px' }}>
          <Select
            {...register(`${name}`)}
            sx={{
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.purple,
              },
              textAlign: 'center',
            }}
            size={'small'}
            value={value}
            onChange={handleChange}
            displayEmpty={true}
          >
            <MenuItem value="" disabled>
              <em>{placeholder}</em>
            </MenuItem>
            {list.length > 0 &&
              list.map((item) => (
                <MenuItem key={item._id} value={item[nameOfField]}>
                  {item[nameOfField]}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default withTheme(SelectWithTypography);
