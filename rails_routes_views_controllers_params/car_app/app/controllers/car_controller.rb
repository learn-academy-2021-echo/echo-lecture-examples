class CarController < ApplicationController
    def jeep
        @pavan_dream_car = params[:dream]
        render 'jeep.html.erb'
    end
    def honda
        @kirk_dream_car = '2017 Honda Fit'
        render html: "Kirk's favorite car is a Honda. beep beep"
    end
    def brabus
        @noah_dream_car = 'BRABUS 800 ADVENTURE XLP'
        render 'brabus.html.erb'
    end
    def hyundai
        @hannah_new_car =  params[:new]
        @hannah_first_car = params[:first]
        @hannah_future_car = params[:future]
        # '2020 Hyundai Santa Fe Sport'
        render 'hyundai.html.erb'
    end
    def parts
        parts_needed = params[:integer]
        if parts_needed.to_i > 10
            @sell_or_not = "let's sell it"
        else
            @sell_or_not = "It's running just fine"
        end
    end

    def home_page
        @echo_cars = ['2017 Toyota Corolla', '2017 Lexus IS Fsport', '2020 Hyundai Santa Fe Sport', '2021 Honda HRV', 'BMW M3', 'Prius', '2016 Mazda 3', 'Nissan Frontier 2016', '2021 Honda HRV', '1996 Lexus ES 300', '2007 Toyota Corolla', '2011 Hyundai Sante Fe', '2013 Hyundai Sante Fe Sport', 'Toyota Venza Hybrid', 'Bugatti chiron', 'Honda Element']
    
        render 'home_page.html.erb'
    end
end
