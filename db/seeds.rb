breakfast_menu = Menu.create(name: 'Breakfast')
  15.times do
    breakfast_menu.dishes.create(
      name: Faker::Food.dish,
      price: Faker::Commerce.price,
      description: Faker::Movie.quote
    )
  end

lunch_menu = Menu.create(name: 'Lunch')
  15.times do
    lunch_menu.dishes.create(
      name: Faker::Food.dish,
      price: Faker::Commerce.price,
      description: Faker::Movie.quote
    )
  end

dinner_menu = Menu.create(name: 'Dinner')
  15.times do
    dinner_menu.dishes.create(
      name: Faker::Food.dish,
      price: Faker::Commerce.price,
      description: Faker::Movie.quote
    )
  end

  puts 'seeded'