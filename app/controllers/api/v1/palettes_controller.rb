class Api::V1::PalettesController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    render json: Palette.all, adapter: :json
  end

  def show
    render json: Palette.find(params[:id]), adapter: :json
  end


  def create
    palette = Palette.new(palette_params)
    if palette.save
      head 200
    else
      head 500
    end
  end
  private

  def palette_params
    params.require(:palette).permit(:title,:hexcode,:description)
  end
end
