class Api::V1::ReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create

    review = Review.new(review_params)

    if current_user
      review.user = current_user
    else
      review.user_id = 1
    end

    review.save

    reviews = Review.where(palette_id: params["palette_id"]).reverse
    render json: reviews
  end

  def review_params
     params.require(:review).permit(:review, :palette_id)
  end
end
