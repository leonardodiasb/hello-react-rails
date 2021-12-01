Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'static#index'

  namespace :api do
    namespace :v1 do
      resources :messages
    end
  end

  get '*path', to: 'static#index', via: :all
end
