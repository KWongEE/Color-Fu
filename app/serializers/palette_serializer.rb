class PaletteSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :hexcodes, :user, :reviews

  def reviews
    output = []
    object.reviews.each do |review|
      output << ReviewSerializer.new(review)
    end
    output
  end

end
