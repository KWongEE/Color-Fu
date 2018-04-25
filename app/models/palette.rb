class Palette < ApplicationRecord
  validates :title, null: false
  validates :hexcode, null: false 

end
