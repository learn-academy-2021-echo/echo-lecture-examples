# Ruby Hashes 1/12/2022

# learn_staff = {instructor: 'Austin', career: 'Jake', marketing: 'TJ'}

# p learn_staff
# => {:instructor=>"Austin", :career=>"Jake", :marketing=>"TJ"}
# Symbol - "the thing that is called....", :symbol_name
# => - hash rocket

# echo = Hash.new
# .new - creating an object / creating an instance of the class
# p echo

# s = String.new
# p s



learn_staff = {instructor: 'Austin', career: 'Jake', marketing: 'TJ'}

# 4 gen categories:
# 1. return data
# 2. create data
# 3. edit/update data
# 4. remove/delete data

# 1. return data
# p learn_staff
# => {:instructor=>"Austin", :career=>"Jake", :marketing=>"TJ"}
# p learn_staff[:instructor] # this one <<<<<<<
# => "Austin"

# 2. create data
learn_staff[:boss_lady] = 'Chelsea'
# p learn_staff
# => {:instructor=>"Austin", :career=>"Jake", :marketing=>"TJ", :boss_lady=>"Chelsea"}

# 3. edit/update data
learn_staff[:instructor] = 'Austin W'
# p learn_staff
# {:instructor=>"Austin W", :career=>"Jake", :marketing=>"TJ", :boss_lady=>"Chelsea"}

# 4. remove/delete data
learn_staff.delete(:career)
# p learn_staff


# Enumberale module - grouping of like things, similar properties - iteration
# Arrays, ranges, hashes - enumberale

# Duck Typing - if it walks like a duck and it quacks like a duck then you can reverse your strings


# learn_staff.each do |key, value|
#   p "#{value}'s job is #{key}"
# end

# One-liners can be wrapped in curlies:
# learn_staff.each{|key, value| p "#{value}'s job is #{key}"}
# learn_staff.each{|banana, apple| p "#{apple}'s job is #{banana}"}


def my_coworkers(hash)
  hash.map do |key, value|
    "My coworker is #{value}"
  end
end
p my_coworkers learn_staff
# => ["My coworker is Austin W", "My coworker is TJ", "My coworker is Chelsea"]
