import React from 'react'
import { Stack, Box, Typography} from '@mui/material'

import Logo from'../assets/images/logo-2.webp'
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <Stack justifyContent='center' alignItems='center'>
        <img src={Logo} alt='Logo' width='48px' height='48px' />
        <Typography mt={2} variant='h5' fontFamily='Pacifico'>
        Fitness Club
        </Typography>
        </Stack>
        <Typography variant='h6' pb='40px' mt='20px' color='black'>
          <a target='_blank' href='https://github.com/fulutas/fitness-club-exercises' style={{ textDecoration : 'none', display : 'flex', justifyContent : 'center', alignItems : 'center', color :'gray'}}>
            <GitHubIcon style={{ marginBottom : '4px', marginRight : '7px'}} /> Github
          </a>
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
