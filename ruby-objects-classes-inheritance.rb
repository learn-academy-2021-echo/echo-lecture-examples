# Ruby Objects Classes and Inheritance 1/11/2022


# p true.class
# p 5.class
# p 4.0.class


# Custom classes

# class NetflixShow
# end

# p NetflixShow.new
#<NetflixShow:0x000000014300dd38>
# p NetflixShow.new
#<NetflixShow:0x000000012c02bbd8>


# Setting Data

# class NetflixShow
#   def set_title(title)
#     # instance varibale - @ and it is basically the Ruby verison of "this"
#     @title = title
#   end
# end
#
#
# # Single Netflix show:
# tv = NetflixShow.new
# # p tv.set_title => # `set_title': wrong number of arguments (given 0, expected 1)
#
# p tv.set_title('Friends')
#
# d = NetflixShow.new
# p d.set_title('Dexter')


# Set more instance variables

# class NetflixShow
#   def set_title(title, run_time)
#     @title = title
#     @run_time = run_time
#   end
# end
#
#
# # Single Netflix show:
# friends = NetflixShow.new
# p friends.set_title('Friends', '30min')
#
# dexter = NetflixShow.new
# p dexter.set_title('Dexter', '60min')


# Get values

# class NetflixShow
#   def set_title(title, run_time)
#     @title = title
#     @run_time = run_time
#   end
#   def get_info
#     "The TV show #{@title} is #{@run_time} long."
#   end
# end
#
#
# # Single Netflix show:
# friends = NetflixShow.new
# friends.set_title('Friends', '30min')
# p friends.get_info
#
# dexter = NetflixShow.new
# dexter.set_title('Dexter', '60min')
# p dexter.get_info



# Initilizer - method that runs automatically and sets up data that belongs to the class

# class NetflixShow
#   def initialize(title, run_time)
#     @title = title
#     @run_time = run_time
#   end
#   def get_info
#     "The TV show #{@title} is #{@run_time} long."
#   end
# end
#
#
# # Single Netflix show:
# friends = NetflixShow.new('Friends', '30min')
# p friends.get_info
#
# dexter = NetflixShow.new('Dexter', '60min')
# p dexter.get_info
#
# cocomelon = NetflixShow.new('Cocomelon', '60min')
# p cocomelon.get_info


# Add more data and manipulate the data

# class NetflixShow
#   def initialize(title, run_time)
#     @title = title
#     @run_time = run_time
#     @watched = false
#   end
#   def get_info
#     "The TV show #{@title} is #{@run_time} long."
#   end
#   def have_i_watched
#     @watched
#   end
#   def watched_the_show
#     @watched = true
#   end
# end
#
#
# # Single Netflix show:
# friends = NetflixShow.new('Friends', '30min')
# p friends.get_info
# p friends.have_i_watched
# friends.watched_the_show
# p friends.have_i_watched

# dexter = NetflixShow.new('Dexter', '60min')
# p dexter.get_info
#
# cocomelon = NetflixShow.new('Cocomelon', '60min')
# p cocomelon.get_info


# Refactor for the get_info method
# class NetflixShow
#   def initialize(title, run_time)
#     @title = title
#     @run_time = run_time
#     @watched = false
#   end
#   def get_info
#     if @watched
#       "You have watched the TV show #{@title} is #{@run_time} long."
#     else
#       "You have not watched the TV show #{@title} is #{@run_time} long."
#     end
#   end
#   def watched_the_show
#     @watched = true
#   end
# end
#
#
# # Single Netflix show:
# friends = NetflixShow.new('Friends', '30min')
# p friends.get_info
# friends.watched_the_show
# p friends.get_info


# Adding the attr_accessor - method that creates two other methods (a getter and setter)

# class NetflixShow
#   # Symbol - "the thing that is named...."
#   attr_accessor :run_time, :title

#   def initialize(title, run_time)
#     @title = title
#     @run_time = run_time
#     @watched = false
#   end
#   def get_info
#     if @watched
#       "You have watched the TV show #{@title} is #{@run_time} long."
#     else
#       "You have not watched the TV show #{@title} is #{@run_time} long."
#     end
#   end
#   def watched_the_show
#     @watched = true
#   end
# end


# Single Netflix show:
# friends = NetflixShow.new('Friends', '30min')
# p friends.get_info

# p friends.run_time
# p friends.title

# ___________________________________________________________
# Inheiritance

class StreamingApp
  # Symbol - "the thing that is named...."
  attr_accessor :run_time, :title

  def initialize(title, run_time)
    @title = title
    @run_time = run_time
    # dynamic values ^
    # ----------
    # static values  v
    @consumed = false
  end
  def get_info
    if @consumed
      "You have watched the TV show #{@title} is #{@run_time} long."
    else
      "You have not watched the TV show #{@title} is #{@run_time} long."
    end
  end
  def consumed_the_media
    @consumed = true
  end
end


class NetflixApp < StreamingApp
  # netflix is the largest, the first, curated content
  def initialize(showname, show_run_time, user_name)
    super(showname, show_run_time)
    @user = user_name
  end
  def get_netflix_info
    if @consumed
      "#{@user} watched the TV show #{@title} is #{@run_time} long."
    else
      "#{@user} has not watched the TV show #{@title} is #{@run_time} long."
    end
  end
end

p witcher = NetflixApp.new("Witcher", "60mins", "Skywalker")
# p witcher.get_info
 p witcher.get_netflix_info



# class YoutubeApp < StreamingApp
#   # ads, content creators, live streams, free, comment section/ live chat, music platform
# end

# Alterantive parameter conventions
 
# class SpotifyApp < StreamingApp
#   # video and music, yearly wrap up
#   def initialize(a, b, q, x, y, z)
#     super(a, b)
#     @genre = q
#     @artist = x
#     @user = y
#     @album = z
#   end
# end


class SpotifyApp < StreamingApp
  # video and music, yearly wrap up
  attr_accessor :genre, :artist, :user, :album
  def initialize(title_param, length_param, genre_param, artist_param, user_param, album_param)
    super(title_param, length_param)
    @genre = genre_param
    @artist = artist_param
    @user = user_param
    @album = album_param
  end
  def get_spotify_info
    if @consumed
      "#{@user} listened to #{@title} on the album #{@album} by #{@artist}. The runtime of the song is #{@length}"
    else
      "#{@user} has not listened to #{@title} on the album #{@album} by #{@artist}. The runtime of the song is #{@run_time}"
    end
  end
end

we_will_rock_you = SpotifyApp.new("We Will Rock You", "2mins 2secs", "Stadium Rock", "Queen", "Skywalker", "News to the world")

p we_will_rock_you.genre
# > "Stadium Rock"
p we_will_rock_you.get_spotify_info
