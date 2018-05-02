class Api::V1::PalettesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Palette.all
  end

  def show
    render json: Palette.find(params[:id])
  end

  def create
    palette = Palette.new(palette_params)
    palette.user = current_user
    if palette.save
      render json: palette, status: :created
    else
      render json: {error: "Could not save palette!"}, status: :unprocessable_entity
    end
  end

  private

  def palette_params
    params.require(:palette).permit(:title, :hexcodes => [])
  end
end
