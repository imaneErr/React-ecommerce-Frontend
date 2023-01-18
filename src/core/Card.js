import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../style/card-style.module.css';

import { addToCart } from './../actions/cartActions'

import { useDispatch } from 'react-redux'

import ShowImage from './ShowImage';
import moment from 'moment'

const Card = ({product, showViewBtn, showDesc = true}) => {
    
    let dispatch = useDispatch() 

    const showStock = (quantity) => {
    
        return quantity > 0 ? <span className="badge badge-primary">{quantity} In Stock</span> : <span className="badge badge-danger">Out of Stock</span>
      
    }

    return (
        <div>

          <div className={`card text-white mt-4 px-2 ${styles.cardStyling}`}>
              {/* <div className="card-header">
                <h4 className="display-6 text-center">{product.name}</h4>
              </div> */}
              <div className={`${styles.cardImage}`}>
              <ShowImage item={product} url="product/photo" className={`card-img-top`}></ShowImage>
              </div>
              
                <div className={`card-body`}>
                  <p className={styles.cardTitle} style={{fontSize: '25px',fontStyle:'oblique',textAlign:'center',fontWeight:'bold',textDecorationLine:'underline',color:'#d1aeae'}}>{product.name.substring(0, 30)}</p>
                  <div className="">
                    <div className='mb-3' style={{fontSize: '16px', color: 'hsl(355deg 32% 61%);',textAlign:'end'}}> Price: <span style={{fontSize: '20px',textAlign:'center', color: 'black'}}>Prix :${product.price}</span></div>
                  </div>
                  {showViewBtn && (

                      <Link to={`/product/${product._id}`}>
                      <small  className="text-muted">  <button className="btn btn-dark" style={{color: '#2c5949'}}>Voir</button></small>
                      </Link>
                  
                  )}

                  {showDesc && (
                    
                    <div style={{color: '#2c5949', fontSize: '20px',fontStyle:'italic',fontWeight:'bolder',textDecorationStyle:'wavy',textDecorationLine:'unset'}}>Product Details: <br/>
                      <p style={{color: '#121212', fontSize: '16px',fontStyle:'unset',textAlign:'center'}}>{product.description}</p>
                    </div>
                    

                  )}

                  { product.quantity > 0 && (
                   <small  className="text-muted"><button onClick={() => dispatch(addToCart(product))} className="btn btn-outline-dark" style={{  backgroundcolor: '#d1aeae',color: 'hsl(355deg 32% 61%);',  border: '2px solid #555555;',float:'right'   }}>Ajouter au  panier</button></small>

                  ) }
              </div>
          </div>

        </div>
    )
}

export default Card
