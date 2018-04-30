class Api::V1::PalettesController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    render json: Palette.all
  end

  def show
    render json: Palette.find(params[:id])
  end


  def create
    palette = Palette.create(palette_params)
  end

  private

  def palette_params
    params.require(:palette).permit(:title, :hexcodes => [])
    end
end
