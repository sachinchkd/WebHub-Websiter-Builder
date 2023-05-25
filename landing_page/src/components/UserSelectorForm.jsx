
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo1 from '../assets/logo1.png'
import { Button, FormControl, FormControlLabel, RadioGroup, FormLabel, Radio ,FormHelperText} from '@mui/material'

function UserSelectorForm(props) {

    const [value, setValue] = React.useState('');
    const navigate=useNavigate();


    const handleRadioChange = (event) => {
        setValue(event.target.value);
    };


    const display=(e)=>{
        e.preventDefault();
        console.log(value);
        if(value=="registered"){
            navigate('/shop-register')

        }else{
            props.onSubmit(true)
        }
    }



    return (
        <div className='flex w-[98%] mr-0 min-h-[40vh] bg-[white] border-2 border-black translate-y-3 '>
            <div className='flex-auto w-[20%] pt-[5%]'>

                <img src={logo1} className='w-[5rem]' />
            </div>
            <div className='flex-auto w-[70%] pt-[5%] pr-[10%]'>
                <h1 className='font-mono font-bold text-xl text-[#4d4d4d]'>Details and Informations</h1>
                <h4 className='font-mono font-medium text-lg text-[#919191]'>some informations.</h4>
                <div className='grid gap-2 '>
                    <form  className='grid gap-2'>
                        <FormControl sx={{ m: 3 }} variant="standard">
                            <RadioGroup
                                aria-labelledby="demo-error-radios"
                                name="quiz"
                                value={value}
                                onChange={handleRadioChange}
                            >
                                <FormControlLabel value="registered" control={<Radio />} label="Already Registered" />
                                <FormControlLabel value="not_registered" control={<Radio />} label="New user" />
                            </RadioGroup>
                           
                            <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined" onClick={display}>
                                next
                            </Button>
                        </FormControl>
                    </form>
                </div>

            </div>
        </div>


    )
}
export default UserSelectorForm;