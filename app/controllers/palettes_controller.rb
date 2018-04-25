class PalettesController < ApplicationController
  def index
    @palettes = Palette.all
  end

  def show
    @palette = Palette.find(params[:id])
  end

  def new
    @palette = Palette.new 
  end
end
