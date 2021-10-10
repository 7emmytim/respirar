import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>ACTORS & LEARNERS<span></span></h1>
                <p>Inspirar, Making learning fun.</p>
                <Link to='/about' className='btn btn-custom btn-lg page-scroll'>Learn More</Link>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
