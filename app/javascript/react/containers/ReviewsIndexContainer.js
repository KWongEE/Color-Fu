import React from 'react'
import ReviewTile from '../components/ReviewTile'

const ReviewsIndexContainer = (props) => {
  if(props.reviews){
    let reviews = props.reviews
    let user = props.user
    let tiles = reviews.map(review => {
      return(
        <ReviewTile
          key={review.id}
          body={review.review}
          createdAt={review.created_at}
          userEmail={user.email}

        />
      )
    })
    return(
      <div>{tiles}</div>
    )
  } else {
    return(
      <div></div>
    )
  }
}

export default ReviewsIndexContainer
