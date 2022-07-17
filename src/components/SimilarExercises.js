import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import HorizontallScrollBar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{ mt : { lg : '100px', xs : '0' }}}>
      <Typography variant='h4' mb={5}>Exercises that target the same muscle group</Typography>
      <Stack direction='row' sx={{ p : '2', position : 'relative'}}>
        {targetMuscleExercises.length ? <HorizontallScrollBar data={targetMuscleExercises} /> : <Loader />}
      </Stack>
      <Typography variant='h4' mb={5} mt={15}>Exercises that use the same equipment</Typography>
      <Stack direction='row' sx={{ p : '2', position : 'relative'}}>
        {equipmentExercises.length ? <HorizontallScrollBar data={equipmentExercises} /> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises