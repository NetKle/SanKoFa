import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { withTheme } from '@emotion/react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

function ControlledRadioButtonsGroup({ theme, buttonArray, fieldName }) {
  const [value, setValue] = useState('');
  const { register } = useFormContext(); // retrieve all hook methods

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl style={{ padding: '5px' }}>
      <RadioGroup
        aria-labelledby="Radio Button"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        {buttonArray.map((item, index) => {
          return (
            <FormControlLabel
              {...register(`${fieldName}`)}
              key={index}
              value={item.value}
              control={
                <Radio
                  sx={{
                    color: theme.lightGrey,
                    '&.Mui-checked': {
                      color: theme.purple,
                    },
                  }}
                />
              }
              label={item.label}
            />
          );
        })}
        {/* <FormControlLabel value="male" control={<Radio />} label="Male" /> */}
      </RadioGroup>
    </FormControl>
  );
}

export default withTheme(ControlledRadioButtonsGroup);
