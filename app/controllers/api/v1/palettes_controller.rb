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
   if current_user
     palette.user = current_user
   else
     palette.user_id = 1
   end

   if palette.save
     render json: Palette.all
   else
     render json: {message: "Did not save."}
   end
  end

 private

   def palette_params
      params.require(:palette).permit(:title, :hexcodes => [])
   end
 end
