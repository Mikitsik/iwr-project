Rails.application.routes.draw do

  get 'home/index'

  root 'home#index'

  resources :profiles, except: [:index]

end
