class PaletteSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :hexcodes, :user
end
