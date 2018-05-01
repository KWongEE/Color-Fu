Rails.application.routes.draw do
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :palettes do
        resources :reviews
      end
    end
  end

  namespace :api do
    namespace :v1 do
      resources :reviews
    end
  end

  root 'static_pages#index'
  get "*path", to: "static_pages#index"
end
