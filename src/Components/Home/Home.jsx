import React from 'react'
import wallpaper from '../../assets/wallpaper.jpg'
import { Box, styled } from '@mui/material'


const Hero = styled(Box)(({theme})=>({
  height: '100vh',
  position: 'relative',
  color: '#fff',
  backgroundImage: `url(${wallpaper})`
}))

const Overlay = styled(Box)(({theme})=>({
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  position: 'absolute',
  top: 0,
  left: '0px',
  padding: 0,
  height: '100%',
  width: '100%',
  opacity: 0.9,
}))


const Home = () => {
  return (
    <Hero>
      <Overlay></Overlay>
    </Hero>
  )
}

export default Home