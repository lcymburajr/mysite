require 'aws-sdk'
# Rails.configuration.aws is used by AWS, Paperclip, and S3DirectUpload
Rails.configuration.aws = YAML.load(ERB.new(File.read("#{Rails.root}/config/aws.yml")).result)[Rails.env].symbolize_keys!
AWS.config(logger: Rails.logger)
AWS.config(Rails.configuration.aws)

# config/initializers/paperclip.rb
Paperclip::Attachment.default_options.merge!(
  url:                  ':s3_domain_url',
  path:                 ':class/:attachment/:id/:style/:filename',
  storage:              :s3,
  s3_credentials:       Rails.configuration.aws,
  s3_permissions:       :private,
  s3_protocol:          'https'
)

#config/initializers/s3_direct_upload.rb
S3DirectUpload.config do |c|
  c.access_key_id     = Rails.configuration.aws[:access_key_id]
  c.secret_access_key = Rails.configuration.aws[:secret_access_key]
  c.bucket            = Rails.configuration.aws[:bucket]
  c.region            = "s3"
end

AWS.config(access_key_id:     ENV['AWS_ACCESS_KEY_ID'],
           secret_access_key: ENV['AWS_SECRET_ACCESS_KEY'] )

S3_BUCKET = AWS::S3.new.buckets[ENV['S3_BUCKET']]