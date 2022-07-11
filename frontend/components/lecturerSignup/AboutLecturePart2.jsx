import { Box, TextField } from '@mui/material';
import React from 'react';
import ControlledRadioButtonsGroup from '../common/ControlledRadioButtonsGroup';
import InputLabel from '../common/InputLabel';
import InputField from '../common/InputField';
import { withTheme } from '@emotion/react';
const AboutLecturePart2 = ({ styles, theme }) => {
  const styles2 = {
    boxRadioGroup: {
      marginBottom: '10px',
      marginTop: '10px',
    },
    inputProps: {
      fontSize: '1rem',
      fontWeight: 600,
    },
  };
  return (
    <>
      <Box>
        <Box css={styles2.boxRadioGroup}>
          <InputLabel text={'איך ההרצאה מועברת?'} />
          <ControlledRadioButtonsGroup
            fieldName={'frontalOrOnline'}
            buttonArray={[
              { value: 'רק פרונטלי', label: 'רק פרונטלי' },
              { value: 'גם מרחוק', label: 'גם מרחוק' },
              { value: 'גם וגם', label: 'גם וגם' },
            ]}
          />
        </Box>
        <Box css={styles.boxTextField}>
          <InputField
            fieldName={'equipmentLecture'}
            text={'ציוד נוסף שההרצאה דורשת?'}
            placeholder={'למשל: מקרן'}
          />
        </Box>
        <Box css={[styles.boxTextField, { height: '100%' }]}>
          <Box sx={{ marginBottom: '5px' }}>
            <InputLabel text={'רוצה להוסיף עוד כמה מילים על ההרצאה?'} />
          </Box>
          <TextField
            multiline
            maxRows={4}
            rows={4}
            fullWidth
            variant="outlined"
            placeholder="עמותות יוכלו לראות את הפירוט בעמוד שלך"
            InputProps={{
              style: styles2.inputProps,
            }}
            sx={{
              '.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: theme.purple,
                },
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default withTheme(AboutLecturePart2);
