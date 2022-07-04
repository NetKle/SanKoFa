import { css, withTheme } from '@emotion/react';
import React from 'react';
import { Divider as DividerMUI } from '@mui/material';
const Divider = ({ theme }) => {
  return <DividerMUI css={{ backgroundColor: theme.lightGrey }}></DividerMUI>;
};

export default withTheme(Divider);
