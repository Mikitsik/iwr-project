# frozen_string_literal: true

Rails.application.routes.draw do
  get 'home/index'

  root 'home#index'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/users/email', to: 'users#email_uniq?'

  resources :users, param: :user_id, except: %i[index new]
  resources :profiles, only: %i[show edit update]
end
