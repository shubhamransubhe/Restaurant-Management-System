import React from 'react'
import {useForm} from 'react-hook-form'
import { Button,FormControl,InputLabel,MenuItem,Select,TextField} from '@mui/material'
import './booking.css'
import { useDispatch } from 'react-redux'
import { AddOrder } from '../../Store/OrderSlice'

const TableCard = () => {
  const dispatch=useDispatch()
  const {register,handleSubmit,formState:{errors}}=useForm()
  const onSubmit=(data)=>{
   dispatch(AddOrder(data))
  }
  return (
    <div className="BookingForm">
      <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>

        <datalist id='guest_limit'>
          <option value="1">1</option>
        </datalist>

        <TextField 
        {...register('name',{required:"Name Field Required"})} 
        type='text' label="Name" color="success" autoComplete='true' error={errors.name ? true :false} variant="outlined" />

        <TextField 
        {...register('email',{required:"Email Field Required"})} 
        type='email' label="Email" autoComplete='true' error={errors.email ? true :false} color="success" variant="outlined" />
        
        <TextField 
        {...register('mobile',{required:"Mobile Field Required",
        maxLength:{value:13,message:"Maximun 13 Characters"},
        minLength:{value:10,message:"Minimun 10 Characters"}})} 
        type='number' autoComplete='true' error={errors.mobile ? true :false} label="Mobile" color="success" variant="outlined" />

        <TextField 
        {...register('checkin',{required:"Check-in Field Required"})} onFocus={(e)=>e.target.type='date'}
        type='text' autoComplete='true'  error={errors.checkin ? true :false} label="Check-In" color="success" variant="outlined" />

        <FormControl sx={{width:'330px'}}>
        <InputLabel color='success' id="time-label">Time</InputLabel>
        <Select
        {...register('time',{required:"time Field Required"})} 
          labelId="time-label"
          label="Time"
          error={errors.time ? true :false} 
          color="success"
          >
          <MenuItem value='8 AM - 10 AM'>08 AM - 10 AM</MenuItem>
          <MenuItem value='10 AM - 12 PM'>10 AM - 12 PM</MenuItem>
          <MenuItem value='12 PM - 2 PM'>12 PM - 02 PM</MenuItem>
          <MenuItem value='2 PM - 4 PM'>02 PM - 04 PM</MenuItem>
          <MenuItem value='4 PM - 6 PM'>04 PM - 06 PM</MenuItem>
          <MenuItem value='6 PM - 8 PM'>06 PM - 08 PM</MenuItem>
        </Select>
        </FormControl>

        <FormControl sx={{width:'330px'}}>
        <InputLabel color='success' id="guest-label">Guest</InputLabel>
        <Select
        {...register('guest',{required:"guest Field Required"})} 
          labelId="guest-label"
          label="Guest"
          error={errors.guest ? true :false} 
          color="success"
          >
          <MenuItem value='1'>1 Person</MenuItem>
          <MenuItem value='2'>2 Person</MenuItem>
          <MenuItem value='3'>3 Person</MenuItem>
          <MenuItem value='4'>4 Person</MenuItem>
          <MenuItem value='5'>5 Person</MenuItem>

        </Select>
        </FormControl>

        <Button type='submit' variant="contained">Book Table Now</Button>

      </form>   
    </div>
  )
}

export default TableCard