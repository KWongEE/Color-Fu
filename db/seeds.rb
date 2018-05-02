# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user = User.create(email:"guest@guest.com", password: "colors")

palette_attributes = [
 { title: "Fall Leaves", hexcodes: ["#E8BA41","#E69039", "#E2642B", "#B0361C", "#68140C"], user: user },
 { title: "Friendly Robots", hexcodes: ["#77C9B7","#5670B0", "#F9D57F", "#F1966F", "#FFFFFF"], user: user },
 { title: "Sedimentary", hexcodes: ["#57839C","#21343F", "#BBD5C7", "#F5F1D8", "#E48964"], user: user },
 { title: "Spring Fling", hexcodes: ["#74DEF1","#5BC798", "#F9D961", "#E6AD3D", "#E46D3E"], user: user },
 { title: "Rustic", hexcodes: ["#683432","#30343A", "#7E817A", "#E0CDA9", "#BD7C6A"], user: user },
 { title: "Olive Oil", hexcodes: ["#99D847","#D3E66C", "#F5F6D8", "#ADC345", "#473F16"], user: user },
 { title: "Terms and Conditions", hexcodes: ["#E6E2B5","#A6A382", "#EFECCE", "#29627D", "#0F2E2F"], user: user },
 { title: "Autumnal", description: "Autumn Love", hexcodes: ["#EC8D5E","#E36D60","#9C4368","#33223B","#211E2B"], user: user },
 { title: "Just Red", hexcodes: ["#610E0F","#EC5A61", "#D72E28", "#612628", "#A8221E"], user: user },
 { title: "Flavors of the Sun", hexcodes: ["#FDFD54","#FBE64D", "#F8CD46", "#F3AA3C", "#EF8533"], user: user },
 { title: "Toy Dinosaurs", hexcodes: ["#AF283F","#76B4BD", "#428950", "#E69E48", "#6D4B2D"], user: user },
 { title: "Igneous", hexcodes: ["#6A1411","#F1EB80", "#ECB65A", "#C63523", "#972116"], user: user },
 { title: "Kinderszenen", hexcodes: ["#1A456F","#4B86A2", "#C1D8B4", "#EFCC46", "#DF572B"], user: user },
 { title: "zen and tea", hexcodes: ["#14222A","#99AA6B", "#C2D58D", "#E5EFD8", "#F8FEE3"], user: user },
 { title: "Buddha in Rain", hexcodes: ["#EF8533","#F9D958", "#CDCB65", "#96B064", "#1D2B32"], user: user },
 { title: "Mountains of Burma", hexcodes: ["#384242","#B9E9B3", "#FFFEA9", "#CDDC6A", "#818F2B"], user: user },
 { title: "Cotton Candy", hexcodes: ["#86D7DE","#FD8E8D", "#E5BD75", "#334A5B", "#86D7DE"], user: user }

]

palette_attributes.each do |a|
  new_palette = Palette.create(a)
end
