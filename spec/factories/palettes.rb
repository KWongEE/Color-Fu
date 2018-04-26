FactoryBot.define do
  factory :palette do
    title { Faker::Friends.character }
    description { Faker::HarryPotter.quote }
    hexcode { Faker::Color.hex_color }
  end
end
