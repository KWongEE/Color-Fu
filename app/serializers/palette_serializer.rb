class PaletteSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :hexcode
  # probably want our timestamps later
end
