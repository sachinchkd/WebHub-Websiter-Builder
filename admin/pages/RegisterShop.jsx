import { Box } from '@mui/material'
import React from 'react'
import ShopTheme from '../components/landing_page/ShopTheme'

function RegisterShop() {
  return (
    <div className='min-h-screen '>
      
      <Box className='bg-[#FFCEFE] h-[100vh] overflow-hidden '>
        <div className={`bg-[#FFE70B] min-h-[40vh] w-[53%] absolute translate-x-[50%]  translate-y-[50%] border-2 border-black `}>
            <ShopTheme  />
        </div>
      </Box>
    </div>


  )
}

export default RegisterShop