import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import inspirar_logo from '../assets/img/inspirar_trademark.png'

const Navigation = () => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <Link className='navbar-brand page-scroll' to='/'>
            {/* Inspirar actors & learners */}
            <img src={inspirar_logo} alt='inspirar' style={{ width: '10vh' }} />
          </Link>{' '}
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
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
          <ul className='nav navbar-nav navbar-right' style={{ textAlign: 'center' }}>
            <li>
              <NavLink exact to='/' activeStyle={{ borderBottom: '2px solid #608dfd' }} className='page-scroll'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' activeStyle={{ borderBottom: '2px solid #608dfd' }} className='page-scroll'>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/movies' activeStyle={{ borderBottom: '2px solid #608dfd' }} className='page-scroll'>
                Movies
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
