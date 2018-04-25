class Api::V1::PalettesController < ApplicationController
  def index
    render json: Palette.all, adapter: :json
  end

  def show
    render json: Palette.find(params[:id]), adapter: :json
  end

  # create
end
