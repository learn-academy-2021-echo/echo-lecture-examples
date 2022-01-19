Rails Routes Views Controllers Params 1/19/22
# Routes, Views, Controllers

1. Views - what is seen by our user
2. Routes - How our user gets somewhere they can see something
3. Controllers - What handles the logic and information for our app
4. Params - How are user can talk to our app and see things dynamically 

## Rails Commands 
```
 $ rails new car_app -d postgresql -T  
 $ cd car_app  
 $ rails db:create  
```
Created database 'car_app_development'  
Created database 'car_app_test'  
```
$ rails g controller Car  
```

    create  app/controllers/car_controller.rb
    invoke  erb
    create    app/views/car
    invoke  helper
    create    app/helpers/car_helper.rb
    invoke  assets
    invoke    scss
    create      app/assets/stylesheets/car.scss
```
 $ rails s
```
## Goals 
- generating a View for the user

- Navigating between Views

- Understanding the basics of creating a request/ response cycle in rails

## HTTP Verbs 
- Post 
- Get
- Put
- Patch
- Delete

# The Controller
The Rails controller is the logical center of your application. It coordinates the interaction between the user, the views, and the model.

app/controllers/car_controller
```ruby
class CarController < ApplicationController
    def jeep
        render html: "Pavan's favorite car is a Jeep. Poor poor man"
    end
    def home_page
        render html: 'Hey you hit the home page'
    end
end
```
# The Route 
In order for our Rails server to respond to a request to this url, it needs a particular path and an http verb. A routes.rb file in the config folder is created when you run rails new. This file is intended to house all valid urls in your application.

http_verb '/name_of_route' => 'name_of_controller#name_of_method'

config/routes.rb
```ruby
Rails.application.routes.draw do
  root 'car#home_page'
  get '/pavan' => 'car#jeep'
# http_verb '/name_of_route' => 'name_of_controller#name_of_method'
end
```

# Overview So Far
1. Made an App
2. Created a DB
3. generated a controller
4. Added methods to the controller (jeep, honda, brabus, home_page)
5. set up our routes using:
    - HTTP verb GET
    - route in single quotes
    - hash rocket
    - name of controller
    - and #
    - name of method 
 
# The View
app/views/car
### !!!~~~ Heads up ~~~!!!
- sometimes text editors merge the folder "views" and "layouts" and you have to be sure to work in the folder named after your controller in the "views" folder

In app/views/car create a new file with the same name as as method + .html.erb

    .erb stands for Embeded Ruby -> Ruby code will be evaluated and returned as pure HTML

### Some files we made
app/views/car/jeep.html.erb

app/views/car/honda.html.erb

app/views/car/brabus.html.erb

app/views/car/home_page.html.erb

## HTML and Embeded Ruby Tag
HTML has mainly one style of code which is the HTML tag

Ruby tags have two styles

    not displayed // code only <% code goes here %>

    displayed(=) // values and results <%= code goes here %>

Working together

    <ul>
    <% ruby_code_goes_here do |value|%>
       <li> <%= value %> </li>
    <% end %>
    </ul>
    
# link_to
 link_to is a Rails method built for embeded ruby that will give us links to different routes defined in our routes.rb file. link_to takes two arguments first: a string of what you want displayed, second: a string of the route you wnt the link to take you too. 

<%= link_to "Home", "/" %> 

<%= link_to "Kirk's favorite car", "/kirk" %> 

### Instance Variables
> instance variables are variables defined in the methods of the controller and accessible to the html.erb page associated with that controller
```ruby
class CarController < ApplicationController
    def jeep
        @pavan_dream_car = params[:dream]
        render 'jeep.html.erb'
    end
end
```
> After we declare the instance variable. in the controller we have access to it in our html.erb

```ruby
<h1>hello world jeep</h1>


<h1><%= @pavan_dream_car%></h1>
```

## Bringing it all together

 app/views/car/home_page.html.erb
 
 ```html
<h1>Welcome to the Car App</h1>
<ul>

<li><%= link_to "Noah's favorite",'/noah'%></li>
<li><%= link_to "Kirk's favorite",'/kirk'%></li>
<li><%= link_to "Pavan's favorite",'/pavan'%></li>
</ul>

    <h3> The class's cars </h3>
    <ul>
    <% @echo_cars.map do |value|%>
        <li><%= value %>  </li>
    <% end %>
    </ul>
```


# Overview 2
1. Made an App
2. Created a DB
3. generated a controller
4. Added methods to the controller (jeep, honda, brabus, home_page)
5. set up our routes
6. created view pages
    - using html.erb 
7. We embedded ruby in our view pages using instance variables declared in our controller
8. We mapped over an array variable and rendered its indexes as list items



# The Params

If we want our app to accept information dynamically we need to be able to accept params via the URL. The built in params hash can be called upon by using the params keyword and passing it a hash key as an argument. If we save that variable we can use it for whatever we like in our app. 


```ruby
def jeep
        @pavan_dream_car = params[:dream]
        render 'jeep.html.erb'
end

<h1><%= @pavan_dream_car%></h1>
```

```ruby
def hyundai
    @hannah_new_car =  params[:new]
    @hannah_first_car = params[:first]
    @hannah_future_car = params[:future]
    # '2020 Hyundai Santa Fe Sport'
    render 'hyundai.html.erb'
end
```

    get '/hannah/:new/:first/:future' => 'car#hyundai'

In the terminal I can see the values being passed through the url of the browser into the App.
```
Parameters: {"new"=>"2020_sante_fe", "first"=>"1999_hond_civic_ls", "future"=>"cyber_truck"}
```


    Important: params always come to us as a string and are not type coerced. 


# Overview 3
1. Made an App
2. Created a DB
3. generated a controller
4. Added methods to the controller (jeep, honda, brabus, home_page)
5. set up our routes
6. created view pages
    - using .html.erb 
7. We embedded ruby in our view pages
    - using instance variables declared in our controller
8. We mapped over an array variable and rendered its indexes as list items
9. We linked our views together
    - <% link_to "link name', '/route_name'%>
10. we set up params to define a variable and display it
    10a. @variable = params[:key]
11. we did some logic with our params 
    11a. remebering that params always come to us as strings
12. we can create multiple params by listing them all out in our routes and controllers