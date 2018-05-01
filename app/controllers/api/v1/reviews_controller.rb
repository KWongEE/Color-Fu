class Api::V1::ReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def show
    @palette = Palette.find(params[:palette_id])
    @review = @palette.reviews
  end

  def new
    @palette = Palette.find(params[:palette_id])
    @review = Review.new(review_params)
  end

  def create
    @palette = Palette.find(params[:palette_id])
    @review = Review.new(review_params)
    @review.palette = @palette
  end

  def index
    @reviews = Review.all
  end

end
