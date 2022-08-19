import { useState } from 'react'
import './Navbar.css'
import Button from '../General/Button'
import Logo from '../General/Logo'
import SearchBar from '../General/SearchBar'
import Dropdown from '../General/Dropdown'

function Navbar() {
    
  return (
    <div className="navbar flex-container">
        <div className="logo flex-item-4">
            <Logo  source="https://i2.wp.com/www.drkelseynd.com/wp-content/uploads/2018/12/yelp-logo-transparent-background-4-e1545081253421.png"/>
        </div>
        <div  className="flex-item-2" >
            <div className='flex-container flex-column'>
                <SearchBar className="flex-item-1"/>
                <div  className="flex-item-1 dropdowns" >
                    <Dropdown name="Restaurants" options={["Delivery","Burgers","Italian","Chinese","Reservations","Japanese","Mexican","Thai"]}/>
                    <Dropdown name="Home Services" options={["Contractors","Electricians","Home Cleaners","HVAC","Landscaping","Locksmiths","Movers","Plumbers"]}/>
                    <Dropdown name="Auto Services" options={["Auto Repair","Auto Detailing","Body Shop","Car Wash","Car Dealer","Oil Change","Parking","Towing"]}/>
                    <Dropdown name="More" options={["Dry Cleaning","Phone Repair","Bars","Nightlife","Hair Salons","Gyms","Massage","Shopping"]}/>
                </div>
                
            </div>
            
        </div>
        <div className='flex-item-4 flex-container'>
            <div className='flex-item-4'>
                <Button text="For Business" type="general-button"/>
            </div>
            <div className='flex-item-4'>
                <Button text="Write A Review" type="general-button"/>
            </div>
            <div className='flex-item-4'>
                <Button text="Login" type="login"/>
            </div>
            <div className='flex-item-4'>
                <Button text="Sign Up" type="sign-up"/>
            </div>
        </div>
    </div>
  )
}

export default Navbar
