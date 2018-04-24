class PalettesController < ApplicationController
  before_action :authorize_user, except: [:index, :show]
  def index
    @palettes = Palette.all
  end

  def show
    @palette = Palette.find(params[:id])
  end

  def create
    @palette = Palette.new(palette_params)

    if @palette.save
      redirect_to @palette, notice: 'Successfully added palette.'
    else
      render :new
    end
  end

  protected

  def palette_params
    params.require(:palette).permit(:title, :description, :hexcode)
  end

  # def authorize_user
  #   if !user_signed_in? || !current_user.admin?
  #     raise ActionController::RoutingError.new("Not Found")
  #   end
  # end
end
