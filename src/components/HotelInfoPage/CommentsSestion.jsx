import { useEffect } from "react"
import UseCrud from "../../hooks/UseCrud"

const CommentsSestion = ({ hotelId }) => {

  const [reviews, getReviews] = UseCrud()

  useEffect(() => {
    if(hotelId){
        getReviews(`/reviews?hotelId=${hotelId}`)
    }
  }, [hotelId])

  console.log(reviews)

  return (
    <div>
        <div>
            {
               reviews?.map( reviewsInfo => (
                <div>
                    <p key={reviewsInfo.id}>{reviewsInfo.comment}</p>
                    <div>{reviewsInfo.rating}⭐</div>
                    <p>{reviewsInfo.comment}</p>
                </div>
               )) 
            }
        </div>
    </div>
  )
}

export default CommentsSestion
