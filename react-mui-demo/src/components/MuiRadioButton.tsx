import { useState } from 'react'
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Paper
} from '@mui/material'

export const MuiRadioButton = () => {
  const [value, setValue] = useState('')
  console.log(value)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const paperStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    verticalAlign: "middle",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "25px",
  };

  return (
  //   <Box>
  //     <FormControl>
  //       <FormLabel id='job-experience-group-label'>
  //         Years of experience
  //       </FormLabel>
  //       <RadioGroup
  //         row
  //         aria-labelledby='job-experience-group-label'
  //         name='job-experience-group'
  //         value={value}
  //         onChange={handleChange}>
  //         <FormControlLabel
  //           labelPlacement='start'
  //           value='0-2'
  //           control={<Radio size='small' color='secondary' />}
  //           label='0-2 years'
  //         />
  //         <FormControlLabel
  //           labelPlacement='start'
  //           value='3-5'
  //           control={<Radio size='small' color='secondary' />}
  //           label='3-5 years'
  //         />
  //         <FormControlLabel
  //           labelPlacement='start'
  //           value='6-10'
  //           control={<Radio size='small' color='secondary' />}
  //           label='6-10 years'
  //         />
  //       </RadioGroup>
  //     </FormControl>
  //   </Box>



    <Paper
      sx={{  display: "flex",
      // justifyContent: "center",
      alignItems: "center",
      // textAlign: "center",
      // verticalAlign: "middle",

      borderRadius: "25px",
      width: "50vh" }}
    >
      <Box>
        <FormControl>
          <FormLabel id='select-update-group-label'>
           Select Update
          </FormLabel>
          <RadioGroup
           row
                 aria-labelledby='job-experience-group-label'
                 name='job-experience-group'
                 value={value}
                 onChange={handleChange}

          >
            <FormControlLabel control={<Radio />} label='Signal' value='Signal'/>
            <FormControlLabel control={<Radio />} label='Program' value='Program'/>
            <FormControlLabel control={<Radio />} label='Channel' value='Channel'/>

          </RadioGroup>

          <FormLabel id='select-update-group-label'>
           Select Action
          </FormLabel>
          <RadioGroup
            row
            name='select-update-group'
            aria-labelledby='select-update-group-label'
          >
            <FormControlLabel control={<Radio />} label='Signal' value='Signal'/>
            <FormControlLabel control={<Radio />} label='Program' value='Program'/>
            <FormControlLabel control={<Radio />} label='Channel' value='Channel'/>

          </RadioGroup>

        </FormControl>
      </Box>
    </Paper>
  );
};
