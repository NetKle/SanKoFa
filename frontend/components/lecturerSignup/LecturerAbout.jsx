import { withTheme } from '@emotion/react';
import { Box, css, Grid, Item, TextField } from '@mui/material';
import React from 'react';
import TextFieldForm from './TextFieldForm';
import Image from 'next/image';
import SelectLocation from './SelectLocation';
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
          <TextFieldForm
            label={
              <span css={styles.spanLabel}>
                שם מלא <span style={{ color: theme.purple }}>*</span>
              </span>
            }
            onChange={() => console.log('Change')}
            placeholder={'שם מלא'}
          />
        </Box>
      </Box>
      <Box css={styles.box}>
        <Box css={styles.boxTextField}>
          <TextFieldForm
            label={
              <span css={styles.spanLabel}>
                <span style={{ position: 'absolute' }}>
                  <Image
                    src="/telephoneIcon.svg"
                    width={'24'}
                    height={'24'}
                    alt="Telephone icon"
                  />
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; טלפון &nbsp;
                <span style={{ color: theme.purple }}>*</span>
              </span>
            }
            onChange={() => console.log('Change')}
            placeholder={'טלפון'}
          />
        </Box>
      </Box>
      <Box css={styles.box}>
        <Box css={styles.boxTextField}>
          <TextFieldForm
            label={
              <span css={styles.spanLabel}>
                <span style={{ position: 'absolute' }}>
                  <Image
                    src="/mailIcon.svg"
                    width={'24'}
                    height={'24'}
                    alt="Mail icon"
                  />
                </span>
                &nbsp; &nbsp; &nbsp; מייל &nbsp;
                <span style={{ color: theme.purple }}>*</span>
              </span>
            }
            onChange={() => console.log('Change')}
            placeholder={'מייל'}
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
