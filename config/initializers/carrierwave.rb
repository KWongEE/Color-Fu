require 'carrierwave/orm/activerecord'
require 'carrierwave/storage/abstract'
require 'carrierwave/storage/file'
require 'carrierwave/storage/fog'
require 'fog/aws'

CarrierWave.configure do |config|
  if Rails.env.staging? || Rails.env.production?
    config.fog_provider = 'fog/aws'
    config.fog_credentials = {
      :provider => 'AWS'
      :aws_access_key_id => ENV["AWS_ID"]
      :aws_secret_access_key => ENV["AWS_KEY"]
      :region => 'us-east-1'

    }
    config.fog_directory = ENV['colorfuphoto']
  else
    config.storage = :file
    config.enable_processing = Rails.env.development?
  end
end
