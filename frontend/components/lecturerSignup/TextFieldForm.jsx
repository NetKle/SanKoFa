import { css, withTheme } from '@emotion/react';
import { TextField } from '@mui/material';
import React from 'react';

const TextFieldForm = ({ label, onChange, placeholder, theme }) => {
  const styles = {
    inputProps: css({
      fontSize: '1rem',
      // color: theme.midGrey,
      fontWeight: 600,
    }),
    inputLabel: css({
      color: 'black',
    }),
  };
  return (
    <TextField
      fullWidth
      sx={{
        '& .MuiInput-underline:after': {
          borderBottom: `2px solid ${theme.purple} !important`,
        },
      }}
      // Label color
      InputLabelProps={{
        style: styles.inputLabel,
        shrink: true,
      }}
      InputProps={{
        style: styles.inputProps,
      }}
      label={label}
      // value={'test'}
      onChange={onChange}
      variant="standard"
      placeholder={placeholder}
    />
  );
};

export default withTheme(TextFieldForm);
