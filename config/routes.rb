Rails.application.routes.draw do
  get 'men/update'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'game#index'

  get '/play' => 'game#play'
end
