import React from 'react'
import './menucard.css'
import { Card, Typography,Box } from '@mui/material'

const MenuCard = ({MenuItem}) => {
  return (
    <Card variant='outlined' className='Menu-Card'>
      <Typography sx={{padding:'30px 0'}} variant='h5' component='p'>{MenuItem.section_name}</Typography>
      {
        MenuItem.items && MenuItem.items.map((item,index)=>{
          return(
            <div key={index} className='Menu-Item'>
            <img src={item.image} alt="" />
            <Box sx={{width:'65%'}}>
            <Typography variant='h6' className='Menu-Title' component='p'>{item.item_name}</Typography>
            <Typography sx={{color:'gray',marginTop:1}} component='p'>{item.description}</Typography>
            </Box>
            <Typography sx={{color:'#e52b34',fontWeight:'bold'}} variant='h6' component='p'>${item.price}</Typography>
            </div>
          )
        })
      }
      
    </Card>
  )
}

export default MenuCard