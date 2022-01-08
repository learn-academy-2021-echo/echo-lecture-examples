# Blocks and Iterables

## While - Keyword in Ruby
# num = 0
# while num < 10
#     p num
#     num += 1
#     # num = num + 1
# end


#  Infinite loop - cancle an inifite loop with cntrl + C
# num = 0
# while num < 10
#     p num
#     # num += 1
#     #  Not incremnting on num means the condition for while will never be met
# end

# While with Array
# nums_array = []
# num = 0
# while num < 10
#     nums_array << num += 1
#     # << shovel operator
# end
# p nums_array

#  Block
#  Do / End - is for code that is multiple lines 
#  {} - for blocks that are one line of code

#  Each - a method that works on arrays the number of times equal to the length of the array

# nums_array = [2, 3, 4]
# nums_array.each do
#     p 'yo'    
# end

#  Pipes - |parameter|
 nums_array = [2, 3, 4]
# nums_array.each do |value|
#     p value * 19
# end

# Curly Bracket syntax
# nums_array.each{|value| p value + 1}

#  Ranges
#  an object with a starting value and an ending value with a sequence between them.

# inclusive range
# p 1..5

# range = 1..10
# range = 1..99
# range = "a".."z"
# range = "A".."z"

# range.each do |value|
#     p value
# end

# range.each do |value| 
#     if value % 2 == 0
#         p 'even'
#     else
#         p value
#     end
# end

# Map


numbers = [2, 3, 4]

multArr = numbers.map do |value|
    value * 3
end



# p multArr

# def show_odds nums
#     nums.map do |value|
#         # if value.even?
#         if value % 2 == 0
#             'even'
#         else
#             value
#         end    
#     end
# end

#  map is opperating upon each item in the itterable item giving us new array as a return. 

# def show_odds nums
#     nums.each do |value|
#         if value.even?
#             'even'
#         else
#             value
#         end    
#     end
# end

# These have the same output

# def show_odds nums
#     nums.each do |value|
#          'hello'
#     end
# end

#  Each is only acting one time per each item within the array. It is not opperating upon each item in the array like a for loop or a foreach in JS. 

p show_odds [1,2,3,4]

#  Select
# nums  = [2, 3, 4, 5, 6, 7, 8]
# def is_even array
#     array.select do |value|
#         value.even?
#     end
# end

# p is_even nums

# def is_even array
#     array.select { |value| value.even? }
# end
# p is_even nums

