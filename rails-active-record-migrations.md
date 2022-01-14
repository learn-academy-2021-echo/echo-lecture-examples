# Active Record Migrations 01/14/22

## Rails set up commands
 $ rails new instrument_app -d postgresql -T
 $ cd instrument_app 
 $ rails db:create
    Created database 'instrument_app_development'
    Created database 'instrument_app_test'
 $ rails generate model Instrument instrument_name:string instrument_type:string
     invoke  active_record
      create    db/migrate/20220114182451_create_instruments.rb
      create    app/models/instrument.rb
 $ rails db:migrate
    == 20220114182451 CreateInstruments: migrating ================================
    -- create_table(:instruments)
    -> 0.0172s
    == 20220114182451 CreateInstruments: migrated (0.0176s) =======================
 $ rails c 

## Rails console
> Instrument.create instrument_name:'violin', instrument_type:'string'
    => #<Instrument id: 2, instrument_name: "violin", instrument_type: "string", created_at: "2022-01-14 18:28:44.724184000 +0000", updated_at: "2022-01-14 18:28:44.724184000 +0000"> 
> exit

# Migration 
A migration is a file that is generated through a rails command that specifically allow us to make updates to the database.

## Generating a migration
 $ rails generate migration add_column_price_to_instruments

- update the migration file with the change method desired
    - add_column :table, :column, :datatype
    - add_column :instruments, :price, :float


    Other common change methods
    

 $ rails db:migrate

== 20220114184150 AddColumnPriceToInstruments: migrating ======================
-- add_column(:instruments, :price, :float)
-> 0.0073s
== 20220114184150 AddColumnPriceToInstruments: migrated (0.0075s) ============= 
 $ rails generate migration change_name_of_column_instrument_name_to_name


## Update the values of new columns

> digri = Instrument.find 3
    => #<Instrument id: 3, name: "didgeridoo", instrument_type: "wood wind", created_at: "2022-01-14 18, price: nil>  
> didgri.update price:200.00
     => #<Instrument id: 3, name: "didgeridoo", instrument_type: "wood wind", created_at: "2022-01-14 18, price: 200.0>  


## Troubleshooting command
 $ rails db:drop