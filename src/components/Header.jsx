import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';


function Header() {
  //to access state useselector hook is used
 const wishlist =useSelector((state)=>state.wishlistReducer) //here the state represent store 
/*  console.log(wishlist); */

const cart = useSelector((state)=>state.cartReducer)
console.log(cart);

  return (
    <div>
        <Navbar expand="lg" className="bg-success position-fixed  w-100"  style={{zIndex:'1'}} >
      <Container>
        <Navbar.Brand> <Link to={'/'} style={{textDecoration:'none',color:'white'}}> <i class='fa-solid fa-cart-plus'></i> E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border rounded me-5' ><Link to={'/wishlist'} style={{textDecoration:'none', color:'white'}}>
               <i className='fa-solid fa-heart me-2' style={{color:'red'}}>
                </i> Wishlist<Badge bg="secondary">{wishlist.length}</Badge></Link></Nav.Link>

            <Nav.Link className='btn border rounded me-5'>
               <Link style={{textDecoration:'none', color:'white'}} to={'/cart'}>
                <i className='fa-solid fa-cart-shopping me-2' style={{color:'yellow'}}>
                  </i>Cart <Badge  bg="secondary">{cart.length}</Badge></Link> </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header