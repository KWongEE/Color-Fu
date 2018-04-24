require 'rails_helper'
require 'pry'

feature 'user deletes account', %Q{
  As an authenticated user
  I want to delete my account
  So that my information is no longer retained by the app
} do
  # Acceptance Criteria
  # * If I'm signed in, I have an option to delete my account
  # * When I opt to delete my account, I get a confirmation that my account will be deleted

  scenario 'authenticated user deletes account' do
    user = FactoryBot.create(:user)

    visit new_user_session_path

    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password

    click_button 'Log in'

    expect(page).to have_content('Signed in successfully')

    click_link 'Delete Account'
    expect(page).to have_content('Account successfully deleted')
  end

  scenario 'unauthenticated user attempts to delete account' do
    visit '/'
    expect(page).to_not have_content('Account Deleted')
  end
end
