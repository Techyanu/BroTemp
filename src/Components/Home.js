import React from 'react'
import '../Style/Homestyle.css'

const Home = () => {
    return (

        <div className='fluid-container bg d-flex align-items-center justify-content-center'>
            <div className='col-md-8 ml-3 con' data-aos="zoom-in-left">
                <h1>Learning Today,</h1>
                <h1>Leading Tomorrow</h1>
                <p>Learn from yesterday, live for today, hope for tomorrow.</p>
                <button type="button" className="btn btn-success"><h6 style={{ fontSize: '18px' }}>Get Stareted</h6></button>
            </div>
        </div>
    )
}

export default Home;
