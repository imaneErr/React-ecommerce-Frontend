import React, {useState, useEffect} from 'react'
import Layout from './Layout'
import { getProducts } from './ApiCore';
import Card from './Card';
import Search from './Search'
import avatar from '../assets/images/avatar.png'
import Carousel from 'react-bootstrap/Carousel';
import f11 from '../assets/images/a3.jpg'
import f12 from '../assets/images/a1.jpg'

import f13 from '../assets/images/a4.jpg'
import f14 from '../assets/images/a5.jpg'
import d13 from '../assets/images/a6.jpg'

function Home() {

    const [productsBestSellers, setProductsBestSellers] = useState([])
    const [productsArrivals, setProductsArrivals] = useState([])

    const loadBestSellers = () => {
        getProducts({sortBy: 'sold', order: 'desc', limit: 6})
            .then(products => setProductsBestSellers(products))
    }

    const loadArrivals = () => {
        getProducts({sortBy: 'createdAt', order: 'desc', limit: 3})
            .then(products => setProductsArrivals(products))
    }

    useEffect(() => {
        loadArrivals()
        loadBestSellers()
    }, [])

    return (
        <div>
            <Layout
                title="Home Page" 
                description="Ecommerce WebSite"
                className="container"
            >
                       <div>
                       <h1 class="text-center" style={{float:'left',textDecorationColor:'ActiveBorder',color:'#2c5949',fontFamily:'fantasy',fontStyle:'revert'}}>Bienvenue⚜️</h1>
                       <p className="text-base text-textColor text-center md:text-left md:w-[80%]" style={{float:'left'}}>
        Soyez au rendez-vous pour les meilleures offres parapharmaceutiques au Maroc !
         Vous n’avez pas le temps de vous déplacer à la parapharmacie et vous souhaitez passer votre commande sur Internet ? 
         PARA VIDEL est là pour vous ! Visitez dès maintenant notre boutique en ligne et profitez de la livraison à domicile !⚜️⚜️

        </p>
<div>
<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={f11}
          alt="First slide"
          style={{height:' 400px',width: '70%;'
           } }
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={f12}
          alt="Second slide"
          style={{height:' 400px',width: '70%;'
        } }
        />

        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={d13}
          alt="Third slide"
          style={{height:' 400px',width: '70%;'
        } }
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={f14}
          alt="Third slide"
          style={{height:' 400px',width: '70%;'
        } }
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={f13}
          alt="Third slide"
          style={{height:' 400px',width: '70%;'
        } }
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
</div>
                <Search />
        


                       </div>
                <h2 className='text-center' style={{backgroundColor:"#2c5949", color: "#d1aeae", padding: '20px', borderRadius: '11px', fontSize: '25px',fontweight: '900;',textAlign:'center',textDecorationLine:"underline",fontStyle:'italic',fontWeight:'bold'}}>Derniers Produits</h2>
                <div className="row mt-3 mb-5">
                    {productsArrivals.map((product, i) => (
                    <div key={product._id} className="col-md-4">
                            <Card product={product} showViewBtn={true} showDesc={false}></Card> 
                    </div>  
                    ))}
                </div>
                <h2 className='text-center' style={{ backgroundColor:"#2c5949", color: "#d1aeae", padding: '20px', borderRadius: '11px', fontSize: '25px',fontweight: '900;',textAlign:'center',textDecorationLine:"underline",fontStyle:'italic',fontWeight:'bold'}}>Meilleures ventes</h2>
                <div className="row mt-3 mb-5">
                        {productsBestSellers.map((product, i) => (
                        <div  key={product._id} className="col-md-4">
                            <Card product={product} showViewBtn={true} showDesc={false}></Card> 
                        </div>  
                        ))}
                    </div>

            </Layout>
        </div>
        
    )
}

export default Home
