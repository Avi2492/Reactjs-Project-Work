import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Categories = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
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
      <h3>Categories</h3>
      <Carousel responsive={responsive}>
      <div className="card">
           <img src="https://cdn.pixabay.com/photo/2016/03/05/19/02/vegetables-1238252__480.jpg" alt=""/>
           <h2>Vegetables</h2>
           <p>
            <button>Go to Vegetables</button>
           </p>
        </div>
        <div className="card">
           <img src="https://cdn.pixabay.com/photo/2016/10/27/22/52/apples-1776744__480.jpg" alt=""/>
           <h2>Fruits</h2>
           <p>
            <button>Go to Fruits</button>
           </p>
        </div>
        <div className="card">
           <img src="https://cdn.pixabay.com/photo/2018/01/31/09/57/coffee-3120750__480.jpg" alt=""/>
           <h2>Drinks</h2>
           <p>
            <button>Go to Drinks</button>
           </p>
        </div>
        <div className="card">
           <img src="https://cdn.pixabay.com/photo/2017/11/06/17/05/vegetable-2924245__480.jpg" alt=""/>
           <h2>Greens</h2>
           <p>
            <button>Go to Drinks</button>
           </p>
        </div>
      </Carousel>
      &nbsp;
      <Carousel responsive={responsive}>
      <div className="card">
           <img src="https://media.istockphoto.com/id/1435030761/photo/chicken-lolipop-chicken-winglet-tandoori-chicken-famous-indian-non-veg-dish-roasted-chicken.jpg?b=1&s=170667a&w=0&k=20&c=lNPbd0Gan3SG_twBapaJlkPGqx-G4CFg4OzPnT1x40g=" alt=""/>
           <h2>Non Veg</h2>
           <p>
            <button>Non Veg</button>
           </p>
        </div>
        <div className="card">
           <img src="https://cdn.pixabay.com/photo/2018/12/01/12/20/almond-3849414__480.jpg" alt=""/>
           <h2>Dry Fruits</h2>
           <p>
            <button>Go to Dry Fruits</button>
           </p>
        </div>
        <div className="card">
           <img src="https://media.istockphoto.com/id/1435030761/photo/chicken-lolipop-chicken-winglet-tandoori-chicken-famous-indian-non-veg-dish-roasted-chicken.jpg?b=1&s=170667a&w=0&k=20&c=lNPbd0Gan3SG_twBapaJlkPGqx-G4CFg4OzPnT1x40g=" alt=""/>
           <h2>Non Veg</h2>
           <p>
            <button>Go to Non Veg</button>
           </p>
        </div>
        <div className="card">
           <img src="https://cdn.pixabay.com/photo/2018/12/01/12/20/almond-3849414__480.jpg" alt=""/>
           <h2>Dry Fruit</h2>
           <p>
            <button>Go to Dry Fruit</button>
           </p>
        </div>
      </Carousel>
    </div>
  );
}  
export default Categories
