require 'rails_helper'
require 'pry'

feature 'user updates account', %Q{
  As an authenticated user
  I want to update my account
  So that I can keep my profile up to date
} do
  # Acceptance Criteria
  # * If I'm signed in, I have an option to update my profile
  # * When I opt to update my profile, I get a confirmation that my profile has been
  #   updated

  scenario 'authenticated user updates profile' do
    user = FactoryBot.create(:user)

    visit new_user_registration_path

    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password

    click_button 'Log in'
    expect(page).to have_content('Signed in successfully')

    click_link 'Update'
    expect(page).to have_content('Updated successfully')
  end

  scenario 'unauthenticated user attempts to update profile' do
    visit '/'
    expect(page).to_not have_content('Updated successfully')
  end
end
