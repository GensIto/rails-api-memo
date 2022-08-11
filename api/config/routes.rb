Rails.application.routes.draw do
  get "memo" => "memo#index"
  post "memo" => "memo#create"
  delete "memo/:id" => "memo#destroy"
  put "memo/:id" => "memo#update"
end
