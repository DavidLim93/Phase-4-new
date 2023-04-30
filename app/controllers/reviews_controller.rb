class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    # def index
    #     reviews = Review.all
    #     render json: reviews
    # end

    def index
        if params[:game_id]
            game = find_game
            review = game.reviews
        else
            review = Review.all
        end
        render json: review, include: :game
    end

    def show
    review = find_review
        if review
            render json: review
        else
            render_not_found_response
        end
    end

    def create
        # byebug
        review = Review.create(title: params[:title], description: params[:description], game_id: params[:game_id])
        render json: review, status: :created
        
    end

    def update 
        review = find_review
        if review
            review.update(review_params)
            render json: review
        else
            render_not_found_response
        end
    end

    def destroy
        review = find_review
        if review
            review.destroy
            head :no_content 
        else
            render_not_found_response
        end
    end

    private

    def find_game
        Game.find(params[:game_id])
    end

    def find_review
        Review.find_by(id: params[:id])
    end

    def review_params
        params.permit(:title, :description, :game_id)
    end

    def render_not_found_response()
        render json: { error: "Review not found" }, status: :not_found
    end

end
