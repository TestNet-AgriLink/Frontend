import React from 'react'
import './fp.css'
import 'charts.css';
import block from './blockchain.jpg'



export default function FarmerProfile(props) {
  return (
    <>
    <div className='allfp'>
    <h3 style={{textAlign:'center'}}>Welcome,{props.name}</h3>
    <div className='containerfp'  >
        
        <div className='boxfp box-1'>
            <h3 style={{textAlign:'center'}}>
                Food
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
