FactoryBot.define do
  factory :palette do
    title { Faker::Friends.character }
    description { Faker::HarryPotter.quote }
    hexcodes { [Faker::Color.hex_color, Faker::Color.hex_color, Faker::Color.hex_color, Faker::Color.hex_color, Faker::Color.hex_color] }
  end
end
