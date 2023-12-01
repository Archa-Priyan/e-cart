import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';


function Cart() {

  const cartArray= useSelector((state)=>state.cartReducer)
  console.log(cartArray);

  const dispatch=useDispatch()
  const [total,setTotal]=useState(0)
  const navigate= useNavigate()

//fn to find sum of given array
const getTotal=()=>{
  if(cartArray.length){
    setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
  }
  else{
    setTotal(0)
  }
  console.log(setTotal);
}
useEffect(()=>{
  getTotal()
},[cartArray])

const handlecart=()=>{
  alert('Thak you! Your order placed sucessfully...')
  dispatch(emptyCart())
  navigate('/')
  
}


  return (
    <div style={{marginTop:'100px'}}>

      <div className='row w-100'>

        { cartArray?.length>0?
          <>
            <div className='col-lg-6 m-5'>
            <table className='table shadow border text-light'>
              <thead >
                <tr>
                  <th className='text-light'>#</th>
                  <th className='text-light'>Product</th>
                  <th className='text-light'>Image</th>
                  <th className='text-light'>Price</th>
                  <th className='text-light'>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartArray.map((item,index)=>(<tr className='text-light'>
                  <td className='text-light'>{index+1}</td>
                  <td className='text-light'>{item.title}</td>
                  <td className='text-light' ><img style={{width:'100px',height:'100px'}} src={item.image}/></td>
                  <td className='text-light'> ₹ {item.price}</td>
                  <td><Button onClick={()=>dispatch(removeFromCart(item.id))} variant='outline-danger'>
                    <i class='fa-solid fa-trash'></i></Button></td>
                </tr>))
                  }
              </tbody>
            </table>
          </div>   
          <div className='col-lg-4 m-5 d-flex justify-content-center align-items-center'>
            
            <div className='border shadow p-5'>
              <h3 className='text-warning'>Cart Summary</h3>
              <h4 className='text-light'>Total number of products:<span className='fw-bolder fs-2 text-success' >{cartArray.length}</span></h4>
              <h4>Price :<span className='fw-bolder fs-2 text-danger'> ₹ {total}</span></h4>
              <button onClick={handlecart}  className='btn btn-success rounded w-100'>Proceed</button>
      
            </div>
          </div>
          </>
        : <p>Nothing to display</p>
        }
       
      </div>
      

    </div>
  )
}

export default Cart