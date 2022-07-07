import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { withTheme } from '@emotion/react';
import InputLabel from '../common/InputLabel';

const InputField = ({ text, placeholder, theme, required, image }) => {
  const styles = {
    box: {
      display: 'flex',
      textAlign: 'right',
    },
    inputProps: {
      fontSize: '1rem',
      // color: theme.midGrey,
      fontWeight: 600,
    },
  };

  return (
    <Box>
      <InputLabel image={image} text={text} required={required} />
      <TextField
        fullWidth
        sx={{
          '& .MuiInput-underline:after': {
            borderBottom: `2px solid ${theme.purple} !important`,
          },
        }}
        InputProps={{
          style: styles.inputProps,
        }}
        // value={'מייל'}
        // onChange={onChange}
        variant="standard"
        placeholder={placeholder}
      />
    </Box>
  );
};

export default withTheme(InputField);
