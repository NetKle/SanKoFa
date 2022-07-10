import React, { useState } from 'react';
import { css, withTheme } from '@emotion/react';
import { Tab, Tabs, Box } from '@mui/material';
import LecturerAbout from './LecturerAbout';
import { FormProvider, useForm } from 'react-hook-form';
const styles = {
  tab: css({
    fontSize: '1rem',
    padding: '0',
  }),
};

const MainButtonNavigation = ({ theme }) => {
  const [value, setValue] = useState(0);
  // React hook form
  const methods = useForm();
  const onSubmit = (data) => console.log(data);

  const viewPage = () => {
    if (value === 0) {
      return <LecturerAbout />;
    } else if (value === 1) {
      return <>1</>;
    } else if (value === 2) {
      return <>2</>;
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{ borderBottom: 1, borderColor: 'divider', textAlign: 'center' }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Tabs"
          centered
          sx={{ '& .Mui-selected': { color: theme.purple + '!important' } }}
          TabIndicatorProps={{
            sx: {
              backgroundColor: theme.purple,
            },
          }}
        >
          <Tab
            css={styles.tab}
            label="קצת על עצמך"
            {...a11yProps(0)}
            sx={{ width: '33%' }}
          />
          <Tab
            css={styles.tab}
            label="על ההרצאה שלך"
            {...a11yProps(1)}
            sx={{ width: '33%' }}
          />
          <Tab
            css={styles.tab}
            label="ההעדפות שלך"
            {...a11yProps(2)}
            sx={{ width: '33%' }}
          />
        </Tabs>
      </Box>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {viewPage()}
          {/* Only for tests */}
          <button type="submit">submit</button>
        </form>
      </FormProvider>
    </Box>
  );
};

export default withTheme(MainButtonNavigation);
