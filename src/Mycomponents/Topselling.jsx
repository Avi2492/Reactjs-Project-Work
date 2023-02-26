
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Topselling = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024},
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (
     <div className="container">
      <h3>Top Selling</h3>
      <Carousel responsive={responsive}>
      <div className="card">
           <img src="https://media.istockphoto.com/id/515275102/photo/larger-and-smaller-tomatoes.jpg?s=612x612&w=0&k=20&c=sBPZrto4hBi7PNSLGIShT2pAZ8zAkC2xuvchVXCJi7E=" alt=""/>
           <h2>Kiwi</h2>
           <p className="price">Rs-70/kg</p>
           <p>
            <button>Add to Cart</button>
           </p>
        </div>
        <div className="card">
           <img src="https://media.istockphoto.com/id/1345769051/photo/three-pumpkins-on-wooden-background.jpg?b=1&s=170667a&w=0&k=20&c=B6uxyLIxIGbBhV4KbRnLnPaDiVwiH3Rvgi6IoXcxuBM=" alt=""/>
           <h2>Kiwi</h2>
           <p className="price">Rs-70/kg</p>
           <p>
            <button>Add to Cart</button>
           </p>
        </div>
        <div className="card">
           <img src="https://media.istockphoto.com/id/1317260740/photo/a-large-ripe-strawberry-with-original-unusual-shape.jpg?s=612x612&w=0&k=20&c=5n-EBp1HNo0GMXGBsvrDyEuq7RhhtahIdypDYsy0Btc=" alt=""/>
           <h2>Kiwi</h2>
           <p className="price">Rs-70/kg</p>
           <p>
            <button>Add to Cart</button>
           </p>
        </div>
        <div className="card">
           <img src="https://media.istockphoto.com/id/1345769051/photo/three-pumpkins-on-wooden-background.jpg?b=1&s=170667a&w=0&k=20&c=B6uxyLIxIGbBhV4KbRnLnPaDiVwiH3Rvgi6IoXcxuBM=" alt=""/>
           <h2>Kiwi</h2>
           <p className="price">Rs-70/kg</p>
           <p>
            <button>Add to Cart</button>
           </p>
        </div>
        <div className="card">
           <img src="https://media.istockphoto.com/id/469232752/photo/big-and-small-and-tomatoey.jpg?b=1&s=170667a&w=0&k=20&c=jJwXy7JeyZD3NjCqheuldd3O6iL3-6KLe4PDbtBykZo=" alt=""/>
           <h2>Tomato</h2>
           <p className="price">Rs-70/kg</p>
           <p>
            <button>Add to Cart</button>
           </p>
        </div>
      </Carousel>
      </div>
      
  );
}

export default Topselling
