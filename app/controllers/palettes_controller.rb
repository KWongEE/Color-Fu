class PalettesController < ApplicationController
  def index
    @palettes = Palette.all
  end
end
