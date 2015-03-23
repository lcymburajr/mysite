class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title
      t.string :description
      t.attachment :image
      t.string :link

      t.timestamps null: false
    end
  end
end
