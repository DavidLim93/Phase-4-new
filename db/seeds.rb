# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
games = Game.create([
    {
        name: "Diablo 3",
        image_url: "https://upload.wikimedia.org/wikipedia/en/8/80/Diablo_III_cover.png"
    },
    
    {
        name: "Path of Exile",
        image_url: "https://upload.wikimedia.org/wikipedia/en/0/08/Path_of_Exile_Logo.png"
    },
    
    {
        name: "Hogwarts Legacy",
        image_url: "https://upload.wikimedia.org/wikipedia/en/7/7c/Hogwarts-Legacy-cover.jpg"
    },
    
    {
        name: "Pokemon Violet",
        image_url: "https://upload.wikimedia.org/wikipedia/en/0/00/Pok%C3%A9mon_Scarlet_and_Violet_banner.png"
    }
    
    ])
    
    reviews = Review.create([
        {
            title: "It's okay",
            description: "Fun to play with friends for a few hours but gets very repetitive",
            game: games.first
        },
       
        {
            title: "Complicated but fun",
            description: "It's a fun game to play with a lot of build varieties. The skill stree is very complicated so definitely need to follow build guides",
            game: games.second
        },
        {
            title: "Sooooo good!",
            description: "The open world and casting spells is so much fun. Highly recommend to people who loves Harry Potter",
    
            game: games.third
        },
        {
            title: "Horrible",
            description: "The game is so glitchy. The storyline was okay",
            game: games.fourth
        }
    ])