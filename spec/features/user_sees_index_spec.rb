require 'rails_helper'

#

feature "user sees index page" do
  scenario "sees created palettes" do
    fall_leaves = Palette.create(title: "Fall Leaves", description: "blah blah blah", hexcode: "#D44D4D")

    visit palettes_path

    expect(page).to have_content "Fall Leaves"
    expect(page).to have_link "Fall Leaves"

    click_link "Fall Leaves"

    expect(page).to have_content "blah blah blah"
    expect(page).to have_content "#D44D4D"
  end
end
