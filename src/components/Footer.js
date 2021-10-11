import React from 'react'
import trademark from '../assets/img/inspirar_trademark.png'

const Footer = () => {
    return (
        <div id='footer'>
            <div className='container text-center'>
                <div className='col-md-6'>
                    <img src={trademark} style={{ width: '40%' }} alt='inspirar' /> <span style={{ fontSize: '2rem', fontWeight: '900' }}>&reg;</span>
                </div>
                <div className='col-md-6'>
                    <p style={{marginTop: '20px'}}>
                        You have any questions or queries, send us a mail <a href='mailto:actorsandlearners@gmail.com'>actorsandlearners@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
