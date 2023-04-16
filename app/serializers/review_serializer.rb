class ReviewSerializer < ActiveModel::Serializer
  attributes :title, :description, :game_id

  belongs_to :game
end
