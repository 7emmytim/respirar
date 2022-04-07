import React from 'react'
import trademark from '../assets/img/inspirar_trademark.png'

const Footer = () => {
    return (
        <div id='footer'>
            <div className='container text-center'>
                <div className='col-md-4'>
                    <div style={{ position: 'relative' }}>
                        <img src={trademark} style={{ width: '60%' }} alt='inspirar' />
                        <span style={{ fontSize: '2rem', fontWeight: '900', position: 'absolute', top: '0' }}>&reg;</span>
                    </div>
                </div>
                <div className='col-md-4'>
                    <p style={{ marginTop: '20px' }}>
                        You have any questions or queries, send us a mail <br /> <a href='mailto:info@actorsandlearners.com'>info@actorsandlearners.com</a> <br />
                        <a href='mailto:support@actorsandlearners.com'>support@actorsandlearners.com</a> <br />
                        <a href='mailto:contact@actorsandlearners.com'>contact@actorsandlearners.com</a>
                    </p>
                </div>
                <div className='col-md-4'>
                    <p style={{ marginTop: '20px' }}>
                        <a href='https://www.twitter.com/InspirarConcept'>Twitter</a> <br />
                        <a href='https://www.instagram.com/inspirarconcept/'>Instagram</a> <br />
                        <a href='https://www.linkedin.com/company/inspirarconcept/'>LinkedIn</a> <br />
                        <a href='https://www.facebook.com/InspirarConcept/'>Facebook</a> <br />
                        <a href='https://www.tiktok.com/@InspirarConcept'>Tiktok</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
