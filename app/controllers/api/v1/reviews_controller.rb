class Api::V1::ReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create

    review = Review.new(review_params)
    review.user = current_user
    review.save

    reviews = Review.where(palette_id: params["palette_id"]).reverse
    render json: reviews
  end

  def review_params
     params.require(:review).permit(:review, :palette_id)
  end
end
