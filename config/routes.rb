Rails.application.routes.draw do
  root 'palettes#index'

  devise_for :users

  resources :palettes

  namespace :api do
    namespace :v1 do
      resources :palettes
    end
  end
  
end
