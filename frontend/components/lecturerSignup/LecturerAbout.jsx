import { withTheme } from '@emotion/react';
import { Box, css, Grid, Item, TextField } from '@mui/material';
import React from 'react';
import TextFieldForm from './TextFieldForm';
import Image from 'next/image';
import SelectLocation from './SelectLocation';
import InputField from './InputField';
const LecturerAbout = ({ theme }) => {
  const styles = {
    box: css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginTop: 10,
      width: '100%',
    }),
    boxTextField: {
      width: '100%',
      textAlign: 'center',
    },
    spanLabel: {
      fontSize: '1.3rem',
      color: ' black !important',
    },
  };
  return (
    <Box>
      <Box css={styles.box}>
        <Box css={styles.boxTextField}>
          <InputField text={'שם מלא'} placeholder={'שם מלא'} required={true} />
        </Box>
      </Box>
      <Box css={styles.box}>
        <Box css={styles.boxTextField}>
          <InputField
            text={'טלפון'}
            placeholder={'טלפון'}
            required={true}
            image={
              <Image
                src="/telephoneIcon.svg"
                width={'18'}
                height={'18'}
                alt="Location icon"
              />
            }
          />
        </Box>
      </Box>
      <Box css={styles.box}>
        <Box css={styles.boxTextField}>
          <InputField
            text={'מייל'}
            placeholder={'טסט'}
            required={true}
            image={
              <Image
                src="/mailIcon.svg"
                width={'18'}
                height={'18'}
                alt="Location icon"
              />
            }
          />
        </Box>
      </Box>
      <Box css={styles.box}>
        <Box css={styles.boxTextField}>
          <SelectLocation />
        </Box>
      </Box>
    </Box>
  );
};

export default withTheme(LecturerAbout);
