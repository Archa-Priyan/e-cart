import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';




function WishList() {
   const wishlistArray =useSelector((state)=>state.wishlistReducer)
   console.log(wishlistArray);

   const dispatch =useDispatch()


   const handlwishlist=(item)=>{
    //items in wishlist shpuld be deleted while we are adding them into cart
    //also it should be added to cart
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
   }
  return (
    <div style={{marginTop:'150px'}}>
      <Row className='ms-5 me-3' >

        { wishlistArray?.length>0?
          wishlistArray?.map((item)=>(
            <Col>
            <Card style={{ width: '18rem'}}>
 <Card.Img variant="top"  src={item.image} height={'100px'} />
<Card.Body>
  <Card.Title>{item.title.slice(0,20)}...</Card.Title>
  <Card.Text>
    <p>{item.description.slice(0,40)}...</p>
    <p>Price: ₹ {item.price}</p>
  </Card.Text>
 <div className='d-flex align-items-center justify-content-between'>
    <Button onClick={()=>dispatch(removeFromWishlist(item.id))} variant="outline-danger"><i class="fa-solid fa-trash"></i></Button>
    <Button onClick={()=>handlwishlist(item)} variant="outline-success"><i class="fa-solid fa-cart-plus"></i></Button>
 </div>

</Card.Body>
</Card>
            </Col>
          ))
   :<p>
    <div>
      <img src="https://w7.pngwing.com/pngs/377/837/png-transparent-empty-cart-illustration-thumbnail.png" alt="" />
    </div>
   </p>
        }
      </Row>
    </div>
  )
}

export default WishList