import React from 'react'

const ReviewTile = (props) => {
  let email = props.userEmail.split("@").pop();

  return(
    <div className="review-tile">
      <p className="review-body">{props.body}</p>
      <p className="review-user">{email}</p>
      <p className="created-at">{props.createdAt}</p>
    </div>
  )
}


export default ReviewTile
