require 'rspec'
require_relative 'garage'
require_relative 'car'

describe 'Garage' do
    it 'has to be real' do
        expect{ Garage.new }.to_not raise_error
    end
    it 'can hold a collection of cars' do
        my_garage = Garage.new
        my_garage.cars << Car.new 
        expect(my_garage.cars).to be_an Array
        expect(my_garage.cars.length).to eq 1
    end
end