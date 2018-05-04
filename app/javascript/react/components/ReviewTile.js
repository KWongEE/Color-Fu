import React from 'react'

const ReviewTile = (props) => {
  let email = props.userEmail.split("@")[0]
  let date = Date(props.createdAt)
  date = date.split("GMT")[0]
  return(
    <div className="review-tile">
        <p className="review-body">{props.body}</p>
      <div className="review-group">
      <div className="review-user">Posted by: {email}</div>
      <div className="review-date">At {date}</div>
      <p></p>
    </div>

    </div>
  )
}


export default ReviewTile
