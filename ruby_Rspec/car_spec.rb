require 'rspec'
require_relative 'car'
# Little bit of set up ^

# RED GREEN REFACTOR -  When we run our tests and when we code
    # Write the test and run it
    # Write the code and run the test
    # Refactor the code and run the test
# ARRANGE ACT ASSERT - How we set up our tests

    # Arrange - Inputs and targets. Arrange steps should set up the test case. Does the test require any objects or special settings? Does it need to prep a database? Does it need to log into a web app? Handle all of these operations at the start of the test.

    # Act - Behavior. Act steps should cover the main thing to be tested. This could be calling a function or method, calling a REST API, or interacting with a web page. Keep actions focused on the target behavior.

    # Assert - Outcomes. Assert steps verify the goodness or badness of that response. Sometimes, assertions are as simple as checking numeric or string values. Other times, they may require checking multiple facets of a system. Assertions will ultimately determine if the test passes or fails.

# How to run the test
    # $ rspec car_spec.rb

describe 'Car' do
    it 'when a car is instantiated' do
        # () value vs {} behavior
        expect{ Car.new }.to_not raise_error
    end
    # each 'it' block needs its own 'do'
    it 'has a make' do
        # Arrange
        my_car = Car.new
        #Act
        my_car.make = 'Subaru'
        # Assert
        expect(my_car.make).to be_a String
        expect(my_car.make).to eq 'Subaru'
    end
    # Red
    # Green
    it 'can be unpainted by default' do
        # Arrange
        my_car = Car.new
        #Assert
        expect(my_car.color).to eq 'Unpainted'
        expect(my_car.color).to be_a String
    end
    it 'can be painted' do
        # Arrange
        my_car = Car.new('Blue')
        # #Act
        # my_car.color = 'Blue'
        #Assert
        expect(my_car.color).to eq 'Blue'
        expect(my_car.color).to be_a String
    end
    it 'has a speed' do
        #Arrange
        my_car = Car.new
        #Assert
        expect(my_car.speed).to be 0
        expect(my_car.speed).to be_a Numeric
    end
    it 'can accelerate by an amount' do
        # Arrange
        my_car = Car.new('black')
        # Act
        my_car.accelerate 10
        # Assert
        expect(my_car.speed).to be 10
    end
end