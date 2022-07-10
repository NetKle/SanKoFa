import { withTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import React from 'react';

const InputLabel = ({ image, text, theme, required }) => {
  const styles = {
    box: {
      display: 'flex',
      textAlign: 'right',
    },
  };
  return (
    <Box css={styles.box}>
      {image && image}
      &nbsp;
      <Typography variant="body1">
        {text} {required && <span style={{ color: theme.purple }}> * </span>}
      </Typography>
    </Box>
  );
};

export default withTheme(InputLabel);
