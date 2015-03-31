class Project < ActiveRecord::Base
  has_attached_file :image, styles: { thumb: "200x150" }
  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
end
