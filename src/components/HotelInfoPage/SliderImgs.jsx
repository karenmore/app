import { useState } from 'react'
import './slyles/SliderImg.css'

const SliderImgs = ( {hotel}) => {

    const [imgSelected, setImgSelected] = useState(0)

    console.log(hotel)

    const objStyle = {
        transform: `translateX(calc(-${imgSelected}/${hotel?.images.length} * 100%))`,
        width: `calc(${hotel?.images.length} * 100%)`
    }

    const handlPrev = () => {
        if(imgSelected -1 >= 0){
        setImgSelected(imgSelected -1 )
        }
    }

    const handlNext = () => {
        if(imgSelected + 1 <= (hotel?.images.length -1)){
            setImgSelected(cv => cv + 1 )
        }
    }

  return (
    <div className='slider'>
      <button onClick={handlPrev} className='slider__btn'>&lt;</button>
      <div className='slider__exterior'>
        <div style={objStyle} className='slider__interior'>
            {
                hotel?.images.map(imgInfo => (
                    <div className='slider__img-container' key={imgInfo.id}>
                        <img className='slider__img' src={imgInfo.url} alt="" />
                    </div>
                ))
            }
        </div>
      </div>
      <button onClick={handlNext} className='slider__btn'>&gt;</button>
    </div>
  )
}

export default SliderImgs
