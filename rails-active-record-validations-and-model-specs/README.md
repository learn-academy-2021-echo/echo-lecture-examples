# Rails Validations and Model Specs


$ rails new pets -d postgresql -T
$ cd pets    
$ rails db:create
$ bundle add rspec-rails   
$ rails generate rspec:install  

Table Name: pet_info
name - string
age - integer
species - string
breed - string
is_vaccinated - boolean


$ rails g model PetInfo name:string age:integer species:string breed:string is_vaccinated:boolean
