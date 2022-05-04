import React from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GiftGrid = ({category}) => {

    // const [images, setImages] = useState([])

 

    const {data:images,loading} = useFetchGifs(category);

    console.log(images)
    console.log(loading)
 
  return (
      <>
      <h3>{category}</h3>
      {loading &&  <p>Loading..</p>}
    <div className='card-grid'>
       
        {
            
            images.map( img =>(
                <GifGridItem 
                key={img.id}
                //img = {img}
                {...img} 
                />
            ))
        }
          
      


    </div>
    </>
  )
}

export default GiftGrid
