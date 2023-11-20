import React from 'react'
import logo from '../../assets/img/starbuckslogo.jpeg'
import { NavLink } from 'react-router-dom'
import { Checkbox, TextField } from '@mui/material'

function Loggin() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <div>
            <div className=' flex  justify-between p-4 shadow-md'>
                <div className='  flex items-center justify-between '>
                    <NavLink to='/'>
                        <img className='w-[100px]' src={logo} alt='' />
                    </NavLink>

                </div>
            </div>
            <h3 className='p-5 text-center text-[25px]'>Create an account</h3>
            <h3 className='SoDoSans-Bold-700 text-[#686868] text-center text-[16px]'>STARBUCKS® REWARDS</h3>
            <p className='sm:w-[500px] text-[14px] py-3 m-auto'>Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and moremore.</p>

            <div className='text-center sm:p-5  rounded-[10px] shadow-md max-w-[600px] m-auto'>
                <p>  * indicates required field</p>

                <div className='p-5 '>

                    <div className='p-5'>
                        <p className='py-5 w-[300px] text-[22px]'>Personal Information</p>
                        <TextField
                            className='sm:w-[400px]'
                            id="outlined-multiline-flexible"
                            label="First name"
                            multiline
                            maxRows={4}
                        />
                        <p className='p-3'> </p>
                        <TextField
                            className='sm:w-[400px] p-3'
                            id="outlined-password-input"
                            label="Last name"
                            type="text"
                            autoComplete="current-password"
                        />
                    </div>
                    <div className='py-5'>
                        <p className='py-5 w-[300px] text-[22px]'>Account Security</p>
                        <TextField
                            className='sm:w-[400px] '
                            id="outlined-password-input"
                            label="Username or email address"
                            type="text"
                            autoComplete="current-password"
                        />
                        <p className='p-3'></p>
                        <TextField
                            className='sm:w-[400px]'
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                        <p className='sm:w-[400px] text-[16px] m-auto py-3'>Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk.</p>
                    </div>
                </div>
                <div>
                    <p className='SoDoSans-Bold-700 text-[#686868] sm:w-[500px] text-[16px]'>COLLECT MORE STARS & EARN REWARDS</p>

                </div>
                <div className='flex sm:w-[400px] m-auto items-center pt-5'>
                    <Checkbox {...label} defaultChecked color="success" />
                    <p>Yes, I’d like email from Starbucks</p>
                </div>
                <p className=' p-3 text-[#686868] m-auto w-[390px] text-[15px]'>Know about initiatives, announcements and product offers.</p>

                <div className='flex  sm:w-[400px] items-start m-auto  pt-5'>
                    <Checkbox {...label} defaultChecked color="success" />
                    <p >I agree to the Starbucks® Rewards Terms opens in new window and the Starbucks Card Terms opens in new window and have read the Starbucks Privacy Statement opens in new window.</p>
                </div>

                <div className='p-5'>
                    <button className='  border-[1px] bg-[#01754A] text-white rounded-full px-5 py-3'>Create account </button>
                </div>

            </div>



        </div>
    )
}

export default Loggin