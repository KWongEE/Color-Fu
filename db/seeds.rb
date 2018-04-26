# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


palette_attributes = [
  { title: "Fall Leaves", description: "blah blah blah", hexcode: ["#d54700","#00FFFF"] },
  { title: "Just Red", hexcode: ["#00FFFF","#333333"]},
  { title: "Marine", description: "Swim The Sea", hexcode: ["#00FFFF"]},
  { title: "Autumnal", description: "Autumn Love", hexcode: ["#ff8800"] },
  { title: "Grassy", hexcode: ["#0d6300"] }

]

palette_attributes.each do |a|
  new_palette = Palette.create(a)
end
