import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { withTheme } from '@emotion/react';

const testTextField = ({ text, placeholder, theme, required, image }) => {
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
      <Box css={styles.box}>
        {image && image}
        &nbsp;
        <Typography variant="body1">
          {text} {required && <span style={{ color: theme.purple }}> * </span>}
        </Typography>
      </Box>
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

export default withTheme(testTextField);
