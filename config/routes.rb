# frozen_string_literal: true

Rails.application.routes.draw do
  get 'password_resets/new'
  get 'password_resets/edit'
  root 'home#index'

  get 'home/index'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/user/existence/:email', to: 'users#email_uniq?', constraints: { email: /.+\..+/}

  namespace :vacancy do
    patch '/publish', to: 'publish#update'
    resources :attributes, param: :attr_id, except: %i[show new]
    resources :country_search, only: %i[index]
    resources :requests, only: %i[index create]
  end

  resources :vacancies, param: :vac_id, except: %i[edit]
  resources :users, param: :user_id, except: %i[index new]

  namespace :user do
    get '/vacancies', to: 'vacancies#index'
    resource :skill_level, only: %i[edit]
    resource :education, only: %i[edit update]
  end


  resources :vacancies, param: :vac_id, except: %i[edit]
  resources :users, param: :user_id, except: %i[index new show]
  resources :profiles, param: :user_id, only: %i[show edit update]
  resources :password_resets, only: %i[create edit update]
  resources :account_activations, only: %i[edit]
end
