class Car
    attr_accessor :make, :color
    attr_reader :speed
    def initialize(color_param='Unpainted', speed_param=0)
        @make
        @color = color_param
        @speed = speed_param
    end
    def accelerate increase_param
        # @speed = @speed + increase_param
        @speed += increase_param
    end
end