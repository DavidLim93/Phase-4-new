class GamesController < ApplicationController
    def index
        games = Game.all
        # byebug
        render json: games
    end

    def show
        game = find_game
        if game
            render json: game, include: :reviews
        else
            render_not_found_response
        end
    end

    def create
        game = Game.create(game_params)
        render json: game, status: :created
    end

    def update 
        game = find_game
        if game
            game.update(game_params)
            render json: game
        else
            render_not_found_response
        end
    end

    def destroy
        game = find_game
        if game
            game.destroy
            head :no_content
        else
            render_not_found_response
        end
    end


    private

    def render_not_found_response
        render json: { error: "Game not found" }, status: :not_found
    end

    def find_game
        Game.find_by(id: params[:id])
    end

    def game_params
        params.permit(:name, :image_url)
    end
end
