Rails.application.routes.draw do
  namespace :api do
    resources :menus
  end

  scope 'menus/:menu_id', as: 'menu' do
    resources :dishes
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
