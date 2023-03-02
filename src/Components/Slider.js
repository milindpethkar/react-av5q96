import React, { Component } from "react";
import Slider from "react-slick";
import 'style.css'


export default function MultipleItems () {
const data=[{
  id: '1',
  url: 'https://images.dominos.co.in/updated_kadhai_paneer.jpg',
  name: 'Kadhai Paneer',
  price: ' 439',
  value:
    'Paneer chunks in your favourite spicy kadhai masala flavors, with toppings of onion & capsicum',
  size: 'Size:Medium',
  quantity: '',
},
{
  id: '2',
  url: 'https://images.dominos.co.in/IndianTandooriPaneer.jpg',
  name: 'Indi Tandoori ',
  price: ' 439',
  value:
    'It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with capsicum, red paprika & mint mayo',
  size: 'Medium',
  quantity: '',
},
{
  id: '3',
  url: 'https://images.dominos.co.in/updated_paneer_makhani.jpg',
  name: 'Paneer Makhani',
  price: ' 439',
  value:
    'Flavorful twist of spicy makhani sauce topped with paneer & capsicum',
  size: 'Medium',
  quantity: '',
},
{
  id: '4',
  url: 'https://images.dominos.co.in/new_deluxe_veggie.jpg',
  name: 'Deluxe Veggie',
  price: '439',
  value: 'Veg delight - onion, capsicum, grilled mushroom, corn & paneer',
  size: 'Medium',
  quantity: '',
},
{
  id: '5',
  url: 'https://images.dominos.co.in/PIZ0167.jpg',
  name: 'The Unthinkable Pizza',
  price: '439',
  value:
    'loaded with Plant Based Protein topping along with Black Olives & Red Paprika enjoy this unique 100% Vegetarian pizza with a 100% Chicken like taste!',
  size: 'Medium',
  quantity: '',
}]
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      
      
    };
    return (
      <div  className='slick-slider-component '> 
        <h2> Multiple items </h2>
        <Slider {...settings}className='bg-gray-300 w-full p-10' >
          {data.map((item,id)=>  <div className='grid  h-48 px-10'key={id}>
            <h3>1</h3>
            
<a href="#" class="block  text-xs h-48 p-6 py-5 px-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800  dark:hover:bg-gray-700">
  <img className='w-full h-10 rounded-lg ' src={item.url} alt=""/>
    <h5 class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
    
    <p class="text-xs text-gray-700 dark:text-gray-400 h-10">{item.value}  </p>
    <a   class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-700 ">
          <div> <a   class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
               Add to cart
           </a></div> </a>
</a>


           
          </div>)}
         
                </Slider>
        
      </div>
    );
  }
