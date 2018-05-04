import React from 'react'

const ReviewTile = (props) => {
  return(
    <div className="review-tile">
      <p className="review-body">{props.body}</p>
    </div>
  )
}


export default ReviewTile
