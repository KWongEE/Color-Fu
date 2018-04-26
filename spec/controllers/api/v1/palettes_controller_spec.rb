require 'rails_helper'

RSpec.describe Api::V1::PalettesController, type: :controller do
  describe "GET#index" do
    # let!(:palette_1) { Palette.create(title: 'Aqua Blue', description: 'As blue as the sea', hexcode: '#00FFFF') }
    # let!(:palette_2) { Palette.create(title: 'Berry Red', description: 'It is very red', hexcode: '#800000') }
    before(:each) do
      create(:palette, title: "Aqua Blue", description: "As blue as the sea", hexcode: "#00FFFF")
      create_list(:palette, 5)
      create(:palette, title: "Berry Red", description: "It is very red", hexcode: "#800000")
    end

    it "serves up a JSON with all of my palette data" do
      get :index
      data = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"

      expect(data["palettes"].length).to eq 7

      expect(data["palettes"][0]["title"]).to eq "Aqua Blue"
      expect(data["palettes"][6]["title"]).to eq "Berry Red"

      expect(data["palettes"][0]["description"]).to eq "As blue as the sea"
      expect(data["palettes"][6]["description"]).to eq "It is very red"

      expect(data["palettes"][0]["hexcode"]).to eq "#00FFFF"
      expect(data["palettes"][6]["hexcode"]).to eq "#800000"
    end
  end

  describe "GET#show/:id" do
    let!(:new_palette) { FactoryBot.create(:palette, title: "Aqua Blue", description: "As blue as the sea", hexcode: "#00FFFF") }
    let!(:palette_data) { { title: new_palette.title, description: new_palette.description, hexcode: new_palette.hexcode }.to_json }

    it "should return a palette" do
      get :show, params:{id: new_palette.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"

      expect(returned_json["palette"]["title"]).to eq new_palette.title
      expect(returned_json["palette"]["description"]).to eq new_palette.description
      expect(returned_json["palette"]["hexcode"]).to eq new_palette.hexcode
      expect(returned_json["palette"]["id"]).to eq new_palette.id

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
    end
  end
end
