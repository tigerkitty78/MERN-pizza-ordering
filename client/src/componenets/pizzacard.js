import React , {useState}from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
export default function Pizzacard({pizza}){
    const [quantity, setquantity]=useState(1);
    const [varient, setvarient]=useState('small');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
const dispatch = useDispatch()
function addtocart()
{
dispatch(addToCart(pizza,quantity,varient))
}  

return(
        <div className="m-5 shadow p-3 mb-5 bg-white rounded ">
            <div onClick={handleShow}>
            <h1>{pizza.name}</h1>
            <img src={pizza.image} className="img-fluid" style={{height:'200px' , width:'200px'}}/>
            </div>
            <div className="flex-container d-flex">
                <div className="w-100 m-1">

                    <p>varients</p>
                    <select className='form-control'value={varient} onChange={(e)=>{setvarient(e.target.value)}}>
                        {pizza.varients.map(varient=>{
                            return <option value={varient}>{varient}</option>
                        })}
                    </select >
                </div>
                <div className="w-100 m-1">
                    <p>quantity</p>
                    <select className="form-control" value={quantity} onChange={(e)=>{setquantity(e.target.value)}} >
                        {[...Array(10).keys()].map((x , i)=>{
                            return <option value={i+1}>{i+1}</option>
                        })}
                    </select>

                </div>
                
            </div>
            <div className="flex-container">
                <div className='m-1 w-100'>
                    <p>Price : {pizza.prices[0][varient]*quantity} LKR</p>
                </div>
                <div className="m-1 w-100">
                    <button className="btn" onClick={addtocart}>add to cart</button>
                </div>

            </div>

    <>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={pizza.image} className="img-fluid" style={{height:'400px', width:'400px'}}/>
        <p>{pizza.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
    
        </Modal.Footer>
      </Modal>


</>
        </div>
    );
}