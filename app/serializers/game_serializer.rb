class GameSerializer < ActiveModel::Serializer
  attributes :name, :image_url

 
  
  has_many :reviews
end
