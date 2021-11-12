import React,{useState,useEffect} from 'react';
import axios from 'axios'
import { Table, Button } from 'react-bootstrap';
import ModalMessage from '../ModalMessage/ModalMessage';

const ManageProducts = () => {
    const[allProducts,setAllProducts]=useState([])
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
        // load all products
        useEffect(()=>{
            axios.get(`https://powerful-harbor-60466.herokuapp.com/allcars`)
            .then(res => {
              const allproducts = res.data;
              setAllProducts(allproducts)
              
            })
        },[allProducts])

         // cancel booking
       const cancelproduct=(_id)=>{
        const confirmDelete=window.confirm('Are you sure? Do you want to remove?')
        if(confirmDelete){
         axios.delete(`http://localhost:5000/removeCarItem/${_id}`)
         .then((result) =>{if(result.data.deletedCount>0){
 const remainingItems=allProducts?.filter(booking=>!booking._id==_id)
 handleShow()
 setAllProducts(remainingItems)
         }});
        }
       }
        
      
    return (
        <>
         <ModalMessage show={show} setShow={setShow} message={'Succesfully deleted'} />
        <div className='container'>
        <h2 className="text-danger text-center my-3">{allProducts?.length} products</h2>
    <Table bproducted hover responsive variant='dark'>
    <thead>
      <tr>
        <th>SL</th>
        <th>Product</th>    
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

    
   {allProducts.map((product,index)=><tr>
    <td>{index+1}</td>
    <td>{product?.title}</td>
    <td>{product?.price}</td>
    <td><Button variant='danger' onClick={()=>{cancelproduct(product?._id)}}>Remove</Button></td>
    
  </tr>)}
   


</tbody>
</Table>

</div>
</>
    );
};

export default ManageProducts;