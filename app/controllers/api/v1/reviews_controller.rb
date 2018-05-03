class Api::V1::ReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    review = Review.new(review_params)
    review.user = current_user
    review.save
    render json: review
  end

  def review_params
     params.require(:review).permit(:review, :palette_id)
  end
end
