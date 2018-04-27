# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


palette_attributes = [
  { title: "Fall Leaves", description: "blah blah blah", hexcode: ["#d54700","#00FFFF","#820333","#F0433A","#540032"] },
  { title: "Just Red", hexcode: ["#FF0000","#FF0000","#FF0000","#FF0000","#FF0000"] },
  { title: "Marine", description: "Swim The Sea", hexcode: ["#00FFFF","#0C63FF","#0EE6C0","#14C7FF","#1089E8"] },
  { title: "Autumnal", description: "Autumn Love", hexcode: ["#EC8D5E","#E36D60","#9C4368","#33223B","#211E2B"] },
  { title: "Grassy", hexcode: ["#0d6300","#2E112D","#0d6300","#2E112D","#d54700"] }

]

palette_attributes.each do |a|
  new_palette = Palette.create(a)
end
