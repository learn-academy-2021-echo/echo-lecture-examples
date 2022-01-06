# Intro to Ruby

# Ruby in the terminal:

$ irb
3.0.0 :001 > exit
$ irb
3.0.0 :001 > 5 + 4
 => 9
3.0.0 :002 > 6 - 3
 => 3
3.0.0 :003 > 5 * 3
 => 15
3.0.0 :004 > 5 / 4
 => 1
3.0.0 :005 > 5 % 3
 => 2
3.0.0 :006 > 3 ** 3
 => 27
3.0.0 :007 > 1.0
 => 1.0
3.0.0 :008 > 5 / 4.0
 => 1.25
3.0.0 :009 > 'hello'
 => "hello"
3.0.0 :010 > "Hey y'all"
 => "Hey y'all"
3.0.0 :011 > true
 => true
3.0.0 :012 > false
 => false
3.0.0 :013 > 7 > 9
 => false
3.0.0 :014 > 9 < 7
 => false
3.0.0 :015 > 9 >= 9
 => true
3.0.0 :016 > 8 <= 0
 => false
3.0.0 :017 > 7 == 6
 => false
3.0.0 :018 > 3 != 7
 => true
3.0.0 :019 > 'hi' == 'hi' && 6 > 3
 => true
3.0.0 :020 > 'hi' == 'hi' || 6 < 3
 => true
3.0.0 :021 > nil
 => nil
3.0.0 :022 > my_name = 'sarah'
 => "sarah"
3.0.0 :023 > my_name
 => "sarah"
3.0.0 :024 > "Hey there #{my_name}"
 => "Hey there sarah"
3.0.0 :025 > my_name.length
 => 5
3.0.0 :026 > my_name.upcase
 => "SARAH"
3.0.0 :027 > my_name.capitalize
 => "Sarah"
3.0.0 :028 > my_name.reverse
 => "haras"
3.0.0 :029 > my_name.upcase.reverse
 => "HARAS"
3.0.0 :030 > my_name.delete('h')
 => "sara"
3.0.0 :031 > my_name.delete'h'
 => "sara"
3.0.0 :032 > my_name.include?('s')
 => true
3.0.0 :033 > my_name
 => "sarah"
3.0.0 :037 > 6 / 4
 => 1
3.0.0 :038 > 6 / 4.0
 => 1.5
3.0.0 :039 > 0.1 + 0.2
 => 0.30000000000000004
3.0.0 :002 > my_name = 'sarah'
 => "sarah"
3.0.0 :003 > my_name.reverse
 => "haras"
3.0.0 :004 > my_name.reverse.capitalize
 => "Haras"
3.0.0 :005 > my_name
 => "sarah"
3.0.0 :006 > my_name = my_name.capitalize
 => "Sarah"
3.0.0 :007 > my_name
 => "Sarah"
3.0.0 :008 > my_name.reverse!
 => "haraS"
3.0.0 :009 > my_name
 => "haraS"
3.0.0 :010 > 3.class
 => Integer
3.0.0 :011 > 4.0.class
 => Float
3.0.0 :012 > true.class
 => TrueClass
3.0.0 :013 > false.class
 => FalseClass
3.0.0 :014 > 'hello'.class
 => String
3.0.0 :015 > my_nums = [3, 4, 5, 6]
 => [3, 4, 5, 6]
3.0.0 :016 > my_nums.length
 => 4
3.0.0 :017 > my_nums[0]
 => 3
3.0.0 :018 > my_nums[-1]
 => 6
3.0.0 :019 > my_nums[-3]
 => 4
3.0.0 :020 > my_nums.first
 => 3
3.0.0 :021 > my_nums
 => [3, 4, 5, 6]
3.0.0 :022 > my_nums.reverse
 => [6, 5, 4, 3]
3.0.0 :023 > my_nums.reverse.first
 => 6
3.0.0 :024 > my_nums[0] = 9
 => 9
3.0.0 :025 > my_nums
 => [9, 4, 5, 6]
3.0.0 :027 > my_nums << 99
 => [9, 4, 5, 6, 99]
3.0.0 :028 > my_nums
 => [9, 4, 5, 6, 99]
3.0.0 :029 > exit


# Running Ruby in a file:
my_nums = [2, 3, 4]

puts my_nums
p my_nums
