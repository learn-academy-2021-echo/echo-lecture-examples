class PetInfo < ApplicationRecord
  validates :name, :age, presence: true
  validates :name, length: { minimum: 2 }
  validates :name, uniqueness: true
end
