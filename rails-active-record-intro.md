ORM
- Object Relational Mapping
- Active Record is an ORM
- SQL queries interact w/ Database
- Rails is written in Ruby
- How do we have the two interact?
- Active Record is the translator between SQL and Ruby
- AR allows us to write SQL queries in Ruby code

- $ rails db:create

Database in the Rails App
- Databases start off empty, need to add a table
- Rails Generate Commands
    - Generate commands are a collection of commands that change the structure of the Rails app, while allowing Rails to be in charge of how things are made 
    - Column Headers can be called almost whatever we want + AR data types

```
Active Record Data types available for rails 6 
:primary_key
:string
:text
:integer
:bigint
:float
:decimal
:numeric
:datetime
:time
:date
:binary
:boolean
```

Rails Generate Command:
- Rails is picky, it has to be exactly this structure
- rails generate - the command that modifies the Rails file structure
- model - the thing we are making
- Schedule - model class or table name (PascalCase)
- column_name:datatype
- $ rails generate model Schedule day:string event_date:date event_name:string
- the command creates a model class and migration
- migrations are how you interact with the database

Rails Migration:
- $ rails db:migrate
- creates a schema
- schema is a snapshot of the database structure
- we do not change the schema directly we let rails do all the work for the schema

Dropping into the Rails Console:
- $ rails c
- allows us to interact with our database

Active Record Query:
 - Schedule.all
 - returns an array: #<ActiveRecord::Relation []>
 - Maps to SQL query as: 
    - SELECT * FROM schedules

Create new data:
- Schedule.create(day:'Thursday', date:Date.today, event_name:'office hours)
- Rails will automatically create a primary key we do NOT need to add the key value pairs:
    - id <- this is handled by Rails and is unique to each instance in the database
    - created_at <- this is handled by Rails and is unique to to when the instance was created
    - updated_at <- this is handled by Rails and is unique to to when the instance was last updated


_______________________________________________________________________
CRUD Actions - CREATE READ UPDATE DELETE

CREATE:
TableName.create key:value key:value key:value ...
- Schedule.create day:'Friday' date:'2022-01-14' event_name:'Assessment'

READ:
TableName.method
- Schedule.all 
- Schedule.first
- Schedule.last
.find id
- Schedule.find 2
    - <Schedule id: 2, day: "Tuesday", date: "2022-01-18", event_name: "yoga", created_at: "2022-01-14 00:26:16.653084000 +0000", updated_at: "2022-01-14 00:26:16.653084000 +0000"> 

TableName.where key:value
- where returns an array of hashes
- Schedule.where day:'wednesday'
    - a return of all matching DB items inside an array
- Schedule.where(day:'wednesday').last
    - returns only one item from the array


UPDATE:
variable_name.update key:value
- assement = Schedule.find 3
- assement.update date:'2022-01-14'

DELETE:
variable_name.destroy
-  trash = Schedule.find 5
-  trash.destroy