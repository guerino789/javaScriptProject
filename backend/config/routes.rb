Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :parts, only: [:index,:show, :update, :create, :destroy]
  resources :computers, only: [:index,:show, :update, :create, :destroy]
  resource :computers do
    resource :parts
  end
end
