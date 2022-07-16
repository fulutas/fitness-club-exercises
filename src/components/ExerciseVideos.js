import React from 'react'
import { Typography, Stack, Box, Button } from '@mui/material'

const ExerciseVideos = ({exerciseVideos, name}) => {


  if(!exerciseVideos.length) return 'Loading...'

  console.log(exerciseVideos)

  return (
    <Box sx={{ marginTop : { lg : '200px', xs : '20px'}}} p='20px'>
      <Typography variant='h4' mb='33px'>
          Watch <span style={{ color : '#ff2625', textTransform : 'capitalize'}}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center' sx={{ flexDirection : { lg : 'row'}, gap : { lg : '110px', xs : '0'}}}>
          {exerciseVideos?.slice(0,6).map((item,index) => (
            <a
            key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} style={{ borderRadius : '10px'}} />
              <Box>
                <Typography variant='h6' color='#000'>
                  {item.video.title}
                </Typography>
                <Typography variant='h7' color='#000'>
                  {item.video.channelName}
                </Typography>
                <Stack fontWeight='light' mt='7px'>
                  <Typography variant='h7' color='#000'>
                    {item.video.viewCountText} • {item.video.publishedTimeText}
                  </Typography>
                </Stack>
              </Box>
            </a>
          ))}
      </Stack>
      <Stack display='flex' justifyContent='center' alignItems='center' direction="row" mt='3rem'>
        <a style={{ textDecoration : 'none' }}
        href={`https://www.youtube.com/results?search_query=${name}`}
        target='_blank'
        > 
          <Typography style={{ borderRadius : '10px', backgroundColor : '#F0E3E3', padding : '0.7rem', cursor : 'pointer', color : '#000' }}>
             Watch more workout videos on youtube
          </Typography> 
        </a>
      </Stack>
    </Box>
  )
}

export default ExerciseVideos