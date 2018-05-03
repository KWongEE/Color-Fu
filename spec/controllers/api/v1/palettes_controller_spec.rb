require 'rails_helper'



RSpec.describe Api::V1::PalettesController, type: :controller do
  before(:each) do
    user1 = User.create(email: "sidneycastro96@gmail.com", password: "password")
    palette1 = Palette.create(title: "Fall Leaves", description: "Basic white girl drinking a Pumpkin Spiced Latte on the first day of Fall.", hexcodes: ["#E8BA41","#E69039", "#E2642B", "#B0361C", "#68140C"], user: user1)
    palette2 = Palette.create(title: "Buddha in Rain", description: "A soothing palette of blues.", hexcodes: ["#EF8533","#F9D958", "#CDCB65", "#96B064", "#1D2B32"], user: user1)
  end

  describe "GET#index" do
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

  describe "GET#show" do
    before(:each) do
      @user = User.create(email: "sidneycastro96@gmail.com", password: "password")
      @palette = Palette.create(id: 1, title: "Fall Leaves", description: "Basic white girl drinking a Pumpkin Spiced Latte on the first day of Fall.", hexcodes: ["#E8BA41","#E69039", "#E2642B", "#B0361C", "#68140"], user: @user)
    end

    it "should return a palette" do
      get :show,  params: { id: @palette.id }
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"

      expect(returned_json["palette"]["title"]).to eq @palette.title
      expect(returned_json["palette"]["description"]).to eq @palette.description
      expect(returned_json["palette"]["hexcodes"]).to eq @palette.hexcodes
      expect(returned_json["palette"]["id"]).to eq @palette.id
      expect(returned_json["palette"]["user_id"]).to eq @user.id

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
    end
  end

  xdescribe "POST#create" do
    before(:each) do
      @user = User.create(email: "sidneycastro42@gmail.com", password: "password")
      sign_in(@user)
      @palette = Palette.create( title: "Fall Leaves", description: "Basic white girl drinking a Pumpkin Spiced Latte on the first day of Fall.", hexcodes: ["#E8BA41","#E69039", "#E2642B", "#B0361C", "#68140"], user: @user)
    end

    it "should have a current_user" do
      session[:user_id] = @user.id
      expect(controller.current_user).to eq(@user)
    end

    it "should create a new palette" do
      post(:create, params: {palette: {title: "Fall Leaves", hexcodes: ["#E8BA41","#E69039", "#E2642B", "#B0361C", "#68140"]}} )
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
      expect(returned_json.length).to eq 1
      expect(returned_json["palettes"].last["title"]).to eq @palette.title
      expect(returned_json["palettes"].last["hexcodes"]).to eq @palette.hexcodes
    end
  end
end
