import React from 'react';
import Image from 'next/image';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import { withTheme } from '@emotion/react';

const DownArrow = ({ theme }) => {
  return (
    <HiOutlineArrowNarrowDown
      css={{
        color: theme.midGrey,
        fontSize: 30,
        marginBottom: 11,
        marginTop: 11,
      }}
    />
  );
};

export default withTheme(DownArrow);
