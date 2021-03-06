import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import inspirar_logo from '../assets/img/inspirar_logo.png'

const Navigation = () => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <div>
            <Link className='navbar-brand page-scroll' to='/' style={{ marginBottom: '50px' }}>
              {/* Inspirar actors & learners */}
              <img src={inspirar_logo} alt='inspirar' style={{ width: '25vh' }} />
            </Link>{' '}
          </div>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
            style={{ marginTop: '30px' }}
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right' style={{ textAlign: 'center', marginTop: '20px' }}>
            <li>
              <NavLink exact to='/' activeStyle={{ borderBottom: '2px solid #608dfd' }} className='page-scroll'>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' activeStyle={{ borderBottom: '2px solid #608dfd' }} className='page-scroll'>
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink to='/movies' activeStyle={{ borderBottom: '2px solid #608dfd' }} className='page-scroll'>
                MOVIES
              </NavLink>
            </li>
            <li>
              <NavLink to='/faqs' activeStyle={{ borderBottom: '2px solid #608dfd' }} className='page-scroll'>
                FAQs
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
