Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'car#home_page'

  get '/pavan' => 'car#jeep'
    # example /pavan?dream=anything
  # get '/pavan/:dream' => 'car#jeep'
  # example /pavan/anything
# http_verb '/name_of_route' => 'name_of_controller#name_of_method'
  get '/kirk' => 'car#honda'
  get '/noah' => 'car#brabus'
  get '/hannah/:new/:first/:future' => 'car#hyundai'
  get '/parts/:integer' => 'car#parts'
end



