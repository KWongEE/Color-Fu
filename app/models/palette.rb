class Palette < ApplicationRecord
  validates :title, null: false
  validates :hexcodes, null: false

  has_many :reviews
end
