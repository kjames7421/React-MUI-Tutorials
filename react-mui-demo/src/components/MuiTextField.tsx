import { useState } from 'react'
import { Stack, TextField, InputAdornment, Paper, Box } from '@mui/material'

export const MuiTextField = () => {
  const [value, setValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const paperStyle = {padding: 20, height: '30vh', width: '50vw', margin: "20px auto"}
  return (
    <Paper elevation={8}
      style={paperStyle}
      >
      <Stack spacing={2}>
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <TextField label="Title" variant="outlined" sx={{width: '80%'}}/>
          <TextField label="Description" variant="outlined" sx={{width: '80%'}}/>
        </Box>
      </Stack>
    </Paper>








    // <Stack spacing={4}>
    //   <Stack spacing={2} direction='row'>
    //     <TextField label='Outlined' variant='outlined' />
    //     <TextField label='Filled' variant='filled' />
    //     <TextField label='Standard' variant='standard' />
    //   </Stack>
    //   <Stack spacing={2} direction='row'>
    //     <TextField label='Small secondary' size='small' color='secondary' />
    //   </Stack>
    //   <Stack spacing={2} direction='row'>
    //     <TextField
    //       label='Form Input'
    //       required
    //       helperText={
    //         !value ? 'Required' : 'Do not share your password with anyone'
    //       }
    //       type='password'
    //       error={!value}
    //       value={value}
    //       onChange={handleChange}
    //     />
    //   </Stack>
    //   <Stack spacing={2} direction='row'>
    //     <TextField
    //       label='Amount'
    //       InputProps={{
    //         startAdornment: <InputAdornment position='start'>$</InputAdornment>
    //       }}
    //     />
    //     <TextField
    //       label='Weight'
    //       InputProps={{
    //         endAdornment: <InputAdornment position='end'>kg</InputAdornment>
    //       }}
    //     />
    //   </Stack>
    // </Stack>
  )
}
