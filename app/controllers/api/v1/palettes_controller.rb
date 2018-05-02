class Api::V1::PalettesController < ApplicationController
  skip_before_action :verify_authenticity_token
  # before_action :authenticate_user!, except: [:index, :show]

  def index
    render json: Palette.all
  end

  def show
    render json: Palette.find(params[:id])
  end

  def create
    palette = Palette.new(palette_params)
    palette.user = current_user
    palette.save
    render json: palette
  end

  private

  def palette_params
     params.require(:palette).permit(:title, :hexcodes => [])
     end
end
