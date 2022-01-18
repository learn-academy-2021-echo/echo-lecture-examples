Active Record Associations 1/18/22

## Active Record - Types of Relationships
- belongs_to <- what we are talking about today
has_one
- has_many <- what we are talking about today
has_many :through
has_one :through
has_and_belongs_to_many

The combination of relationships are: 
One-to-many <- what we are talking about today
One-to-one
Many-to-many 

# Rails commands 
 $ rails new blog_app -d postgresql -T
 $ rails g model User user_name:string email:string
 $ rails db:migrate 
 $ rails c
 > User.create user_name:"wizard_kicker", email:"ikickwizards@gmail.com"
 => #<User id: 1, user_name: "wizard_kicker", email: "ikickwizards@gmail.com", created_at: "2022-01-18 18:02:04.378587000 +0000", updated_at: "2022-01-18 18:02:04.378587000 +0000"> 
 
 > User.create user_name:"hash_slinging_slasher", email:"bikikibottom_terror@gmail.com"
=> #<User id: 3, user_name: "hash_slinging_slasher", email: "bikikibottom_terror@gmail.com", created_at: "2022-01-18 18:03:50.552849000 +0000", updated_at: "2022-01-18 18:03:50.552849000 +0000"> 

 $ rails g model BlogPost title:string post:text image_url:string user_id:integer

                                                                    ^ Foreign_key:integer
                                                (Foreign_key is always an integer in rails)

Update the models in app/model
```ruby
class User < ApplicationRecord
  has_many :blog_posts
#                   ^Plural (user can make lots of blog posts)
end


class BlogPost < ApplicationRecord
  belongs_to :user
#              ^Singular (Blog posts only belong to one user)
end
```

> kicker = User.first
> p kicker

### The syntax for creating a new instance of the belongs_to class

#### Stuff we need
- we need the variable (kicker)
- dot (.)
- table_name-- but lowercase, snake_cased and plural (blog_posts)
- dot (.)
- create (create)
- kicker.blog_posts.create 

#### The whole command 
> kicker.blog_posts.create title:"My trip to Scotland", post:"You would not believe the different kinds of wizards they have in Scotland, I found a whole train of them.", image_url:"https://www.worldtravelguide.net/wp-content/uploads/2017/03/shu-UK-Scotland-GlenfinnanViaduct_351622814-1440x823-1.jpg" 

> kicker.blog_posts.create title:"My trip to Washington", post:"I heard there was a group of wizards in washinton but turns out they're not real wizards... or were they.", image_url:"https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Washington_Wizards_logo.svg/1200px-Washington_Wizards_logo.svg.png" 

### We do not provide the foreign key but rather the convention is to let rails apply the foreign key for us.
