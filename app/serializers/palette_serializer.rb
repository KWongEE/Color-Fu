class PaletteSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :hexcode
end
