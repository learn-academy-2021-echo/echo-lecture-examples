# Ruby Conditionals Notes 1/6/22

num = 100
# if takes an evaluation
# if num > 100
    # underneath if we put the code we want to execute
    # p 'number is greater than 100'
# We finish every block of code in ruby with the keyword "end"
# end

# if num > 100
#     p 'number is greater than 100'
#     # Key word "else" does not take an evaluation statment

# else
#     p 'number is less than 100'
#     # We only need a single "end" for the entire condtional block
# end


# elseif is an evaluation statement that we can use as many times as we like. 
# if num > 100
#     p 'number is greater than 100'
# elsif num == 100
#     p 'the number is 100'
# else
#     p 'number is less than 100'
# end

#  Nested Conditionals 
# my_number = 19

# if my_number.even?
#     p 'your number is even'
#     if my_number > 20
#         p 'your number is greater than 20'
#     else
#         p 'your number is less than 20'
#     end
# else 
#     p 'your number is odd'
#     if my_number > 20
#         p 'your number is greater than 20'
#     else
#         p 'your number is less than 20'
#     end
# end

# gets
#  Allows for inputs into the terminal
# name = gets
# p name + 'Is super cool'

# .chomp
#  Removes any Non-String Characters like line breaks
name = gets.chomp
p  "#{name} is super cool"


# Unless
unless name == 'Echo Squad'
    p "Hello #{name}, how are you?"
else 
    p 'SQUUUUAAAADDDDD'
end

