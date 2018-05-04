class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_email, :review

  def user_email
    object.user.email
  end
end
