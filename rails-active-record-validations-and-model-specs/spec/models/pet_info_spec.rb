require 'rails_helper'

RSpec.describe PetInfo, type: :model do
  # generic db testing
  it 'is valid with valid attributes' do
    zoe = PetInfo.create name: 'Zoe', age: 2, species: 'dog', breed: 'maltipoo', is_vaccinated: true
    expect(zoe).to be_valid
  end
  it 'is not valid without a name' do
    zoe = PetInfo.create age: 2, species: 'dog', breed: 'maltipoo', is_vaccinated: true
    expect(zoe.errors[:name]).to_not be_empty
  end
  it 'is not valid without age' do
    zoe = PetInfo.create name: 'Zoe', species: 'dog', breed: 'maltipoo', is_vaccinated: true
    expect(zoe.errors[:age]).to_not be_empty
  end
  it 'name needs to be at least 2 characters' do
    zoe = PetInfo.create name: 'Z', age: 2, species: 'dog', breed: 'maltipoo', is_vaccinated: true
    expect(zoe.errors[:name]).to_not be_empty
  end
  it 'name should be unique' do
    zoe1 = PetInfo.create name: 'Zoe', age: 2, species: 'dog', breed: 'maltipoo', is_vaccinated: true
    zoe2 = PetInfo.create name: 'Zoe', age: 2, species: 'dog', breed: 'maltipoo', is_vaccinated: true
    expect(zoe2.errors[:name]).to_not be_empty
  end
end
