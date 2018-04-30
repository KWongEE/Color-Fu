class Palette < ApplicationRecord
  validates :title, null: false
  validates :hexcodes, null: false

  belongs_to :user
end
