class CreatePetInfos < ActiveRecord::Migration[7.0]
  def change
    create_table :pet_infos do |t|
      t.string :name
      t.integer :age
      t.string :species
      t.string :breed
      t.boolean :is_vaccinated

      t.timestamps
    end
  end
end
