import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Assests/CSS/Bars.css'

function Leftbar() {
    const navigate=useNavigate();

const dashboardHandler = ()=>{
    navigate('/Dashboard')
}
const settingsHandler = ()=>{
    navigate('/UpcomingAppointments')
}
const usersHandler = () =>{
    navigate('/PreviousAppointments')
}
const paymentHistoryHandler = () =>{
    navigate('/PaymentHistory')
}
const usedServicesHandler = () =>{
    navigate('/ServicesUsed')
}
    return (
        <>
            <div className='left-bar'>
                <div className='left-bar-container'>
                    <button className='left-bar-button nav-btn' onClick={dashboardHandler}>
                        Dashboard
                    </button>
                    <button className='left-bar-button nav-btn' onClick={usersHandler}>
                    Upcoming Appointments
                    </button>
                    <button className='left-bar-button nav-btn' onClick={settingsHandler}>
                    Previous Appointments
                    </button>
                    <button className='left-bar-button nav-btn' onClick={paymentHistoryHandler}>
                    Payment History
                    </button>
                    <button className='left-bar-button nav-btn' onClick={usedServicesHandler}>
                    Services Used
                    </button>

                </div>
            </div>
        </>
    )
}

export default Leftbar