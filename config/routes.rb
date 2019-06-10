# frozen_string_literal: true

Rails.application.routes.draw do
  get 'home/index'

  root 'home#index'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/user/existence/:email', to: 'users#email_uniq?', constraints: { email: /.+\..+/}

  resources :users, param: :user_id, except: %i[index new]
  resources :profiles, only: %i[show edit update]
end
