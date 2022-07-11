import { withTheme } from '@emotion/react';
import { Box, Button, css, TextField } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import SelectLocation from './SelectLocation';
import InputField from '../common/InputField';
import InputLabel from '../common/InputLabel';
import ButtonFooter from '../common/ButtonFooter';
const LecturerAbout = ({ theme, toNextPage }) => {
  const styles = {
    box: css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      // marginTop: 10,
      width: '100%',
      height: '12vh',
    }),
    boxTextField: {
      width: '100%',
      textAlign: 'center',
    },
    boxTextFieldFlex: {
      textAlign: 'center',
      width: '40%',
    },
    spanLabel: {
      fontSize: '1.3rem',
      color: ' black !important',
    },
    uploadButton: {
      marginTop: '6px',
      color: 'black',
      width: '100%',
      height: '100%',
      fontWeight: '300',
      borderColor: 'black ',
      '&:hover': {
        borderColor: theme.purple,
      },
      '&:after': {
        borderColor: theme.purple,
      },
    },
    buttonFooter: {
      width: '100%',
      height: '4vh',
    },
  };
  return (
    <Box sx={{ height: '85vh' }}>
      <Box css={styles.box}>
        <Box css={styles.boxTextField}>
          <InputField
            fieldName={'fullName'}
            text={'שם מלא'}
            placeholder={'שם מלא'}
            required={true}
          />
        </Box>
      </Box>
      <Box css={styles.box}>
        <Box css={styles.boxTextField}>
          <InputField
            fieldName={'phoneNumber'}
            text={'טלפון'}
            placeholder={'טלפון'}
            required={true}
            image={
              <Image
                src="/telephoneIcon.svg"
                width={'20'}
                height={'20'}
                alt="Location icon"
              />
            }
          />
        </Box>
      </Box>
      <Box css={styles.box}>
        <Box css={styles.boxTextField}>
          <InputField
            fieldName={'mail'}
            text={'מייל'}
            placeholder={'טסט'}
            required={true}
            image={
              <Image
                src="/mailIcon.svg"
                width={'20'}
                height={'20'}
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
      <Box css={styles.box}>
        <Box css={styles.boxTextFieldFlex}>
          <InputLabel
            text={'תמונה'}
            image={
              <Image
                src="/imageIcon.svg"
                width={'24'}
                height={'24'}
                alt="Image icon"
              />
            }
          />
          <Button
            variant="outlined"
            css={styles.uploadButton}
            endIcon={
              <Image
                src="/uploadIcon.svg"
                width={'24'}
                height={'24'}
                alt="Location icon"
              />
            }
          >
            לחץ להעלאה
          </Button>
        </Box>
        <Box css={styles.boxTextFieldFlex}>
          <InputLabel
            required={true}
            text={'סרטון'}
            image={
              <Image
                src="/videoCameraIcon.svg"
                width={'24'}
                height={'24'}
                alt="videoCameraIcon icon"
              />
            }
          />
          <Button
            variant="outlined"
            css={styles.uploadButton}
            endIcon={
              <Image
                src="/uploadIcon.svg"
                width={'24'}
                height={'24'}
                alt="Location icon"
              />
            }
          >
            לחץ להעלאה
          </Button>
        </Box>
      </Box>
      <Box sx={{ height: '15vh', marginTop: '3vh' }}>
        {/* Check the name in DB */}
        <InputField
          fieldName={'how'}
          placeholder={''}
          text={'איך הגעת אלינו?'}
        />
      </Box>
      <Box css={styles.buttonFooter}>
        <ButtonFooter text={'המשך'} toNextPage={toNextPage} numberPage={1} />
      </Box>
    </Box>
  );
};

export default withTheme(LecturerAbout);
