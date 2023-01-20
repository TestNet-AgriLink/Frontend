import React from 'react'
import './fp.css'
import 'charts.css';
import block from './blockchain.jpg'
import Navbarfarmer from './Navbarfarmer';



export default function FarmerProfile(props) {
  return (
    <>
    <Navbarfarmer/>
    <div className='spaceR'></div>
    <h3 style={{textAlign:'center'}}>Welcome,{props.name}</h3>
    <div className='containerDet'>
      <h3 style={{textAlign:'center',padding:'5px'}}>Your Details</h3>
        <span className='spanDet'>Name:</span>
        <p className='pDet'>12</p>
        <span className='spanDet'>Address:</span>
        <p className='pDet'></p>
        <span className='spanDet'>FT balance:</span>
        <p className='pDet'></p>
        <span className='spanDet'>Eth balance:</span>
        <p className='pDet'></p>
        <span className='spanDet'>Land:</span>
      </div>


    
    <div className='allfp'>
    
    <div className='containerfp'  >
        
        <div className='boxfp box-1'>
            <h3 style={{textAlign:'center'}}>
              Transfertoken
            </h3>
        </div>
        <div className='boxfp box-2'>
        <h3 style={{textAlign:'center'}}>
                Fertilizer
            </h3>
        </div>
        
      </div>

      </div>
 </>
  )
}
