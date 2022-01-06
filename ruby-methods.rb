# Ruby Methods 1/6/2022

# Ruby - "define" a method

def greeter
  'Hello World!'
end

p greeter


# Implicit return - will automatically return the last line of a method


# Passing an argument:
def greeter(name)
  "Hello #{name}!"
end

p greeter # --> ruby-methods.rb:13:in `greeter': wrong number of arguments (given 0, expected 1)

p greeter('Echo')

# p greeter 'Echo' --> Ruby doesn't require parens but it is a best practice to use them


# Passing Two Arguments:
def greeter(name, cohort)
  "Hello #{name} from the #{cohort} cohort!"
end

p greeter('Kevin','Echo')
p greeter('Chris','Echo')
p greeter('Raul','Echo')


# Adding Logic:
def is_even number
  if number % 2 == 0
    "#{number} is even"
  else
    "#{number} is not even"
  end
end

# Using a built in method to determine if the number is even:
def is_even number
  if number.even?  # doesn't work for floats
    "#{number} is even"
  else
    "#{number} is not even"
  end
end

p is_even 10
p is_even 7
p is_even 4.9 # --> error


# Getting info from terminal:
def can_you_vote(age)
  if age >= 18
    'You can vote'
  else
    'So sorry.'
  end
end

puts 'Enter your age:'
user_age = gets.chomp # ruby-methods.rb:59:in `>=': comparison of String with 18 failed (ArgumentError)
user_age = gets.chomp.to_i

p can_you_vote(user_age)
