require 'rails_helper'

RSpec.describe Api::V1::PalettesController, type: :controller do
  describe "GET#index" do
    before(:each) do
      Palette.create(title: "Fall Leaves", description: "Basic white girl drinking a Pumpkin Spiced Latte on the first day of Fall.", hexcodes: ["#E8BA41","#E69039", "#E2642B", "#B0361C", "#68140C"])
      Palette.create(title: "Buddha in Rain", description: "A soothing palette of blues.", hexcodes: ["#EF8533","#F9D958", "#CDCB65", "#96B064", "#1D2B32"])
    end

    it "serves up a JSON with all of my palette data" do
      get :index
      data = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"

      expect(data["palettes"].length).to eq 2

      expect(data["palettes"][0]["title"]).to eq "Fall Leaves"
      expect(data["palettes"][1]["title"]).to eq "Buddha in Rain"

      expect(data["palettes"][0]["description"]).to eq "Basic white girl drinking a Pumpkin Spiced Latte on the first day of Fall."
      expect(data["palettes"][1]["description"]).to eq "A soothing palette of blues."

      expect(data["palettes"][0]["hexcodes"]).to eq ["#E8BA41","#E69039", "#E2642B", "#B0361C", "#68140C"]
      expect(data["palettes"][1]["hexcodes"]).to eq ["#EF8533","#F9D958", "#CDCB65", "#96B064", "#1D2B32"]
    end
  end

  describe "GET#show/:id" do
    let!(:palette1) { Palette.create(title: "Aqua Blue", description: "As blue as the sea", hexcodes: ["#00FFFF", "#99AA6B", "#C2D58D", "#E5EFD8", "#F8FEE3"]) }

    it "should return a palette" do
      get :show, params:{id: palette1.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"

      expect(returned_json["palette"]["title"]).to eq palette1.title
      expect(returned_json["palette"]["description"]).to eq palette1.description
      expect(returned_json["palette"]["hexcodes"]).to eq palette1.hexcodes
      expect(returned_json["palette"]["id"]).to eq palette1.id

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
    end
  end
end
