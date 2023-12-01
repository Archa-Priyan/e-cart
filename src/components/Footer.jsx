import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{ width: '100%', height: '300px', }} className='d-flex justify-content-center align-items-center flex-column bg-danger'>
      <div className="footer d-flex justify-content-evenly align-items-center w-100" >
        <div className="website mt-5" style={{ width: '400px' }}>
          <h4><i class="fa-solid fa-cart-shopping me-3"></i>{' '}
            E-Cart</h4>
          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus doloremque perspiciatis laborum dolore natus cupiditate! Dolorem itaque consequatur, culpa, aut veniam numquam ullam molestiae iure ab eligendi voluptates quia enim.</h6>
        </div>
        <div className="list d-flex flex-column">
          <h4>Link</h4>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
          <Link to={'/cart'} style={{ textDecoration: 'none', color: 'white' }}>Cart</Link>
          <Link to={'/wishlist'} style={{ textDecoration: 'none', color: 'white' }}>WishList</Link>
        </div>
        <div className="guide d-flex flex-column">
          <h4>Guides</h4>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>React</Link>
          <Link to={'https://react-bootstrap.netlify.app/'} style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</Link>
          <Link to={'https://bootswatch.com/'} style={{ textDecoration: 'none', color: 'white' }}>Bootswatch</Link>
        </div>
        <div className="contact mt-3">
          <h4>Contact Us</h4>
          <div className='d-flex'>
            
              <input type="text" className='form-control' placeholder='Enter your Contact'/>
              <button className='btn btn-warning ms-3'>Subscribe</button>
            
          </div>
          <div className="links d-flex justify-content-evenly align-items-center mt-3">
          <Link to={'www.linkedin.com/in/archa-priyan-9aab501b0'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-instagram fa-2x"></i></Link>
          <Link to={'www.linkedin.com/in/archa-priyan-9aab501b0'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-twitter fa-2x"></i></Link>
          <Link to={'www.linkedin.com/in/archa-priyan-9aab501b0'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
          <Link to={'www.linkedin.com/in/archa-priyan-9aab501b0'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-facebook fa-2x"></i></Link>
          </div>
        </div>
      </div>
      <p>Copyright 2023 e-cart. Built with React</p>
    </div>
  )
}

export default Footer
