Rails.application.routes.draw do
  resources :messages
  resources :thoughts
  resources :conversations
  get '/', to: 'conversations#index'
  get 'messages/conversation/:id', to: 'conversations#show_messages'
  get 'thoughts/message/:id', to: 'messages#show_thoughts'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
