class AddSecondDescriptionToProjects < ActiveRecord::Migration
  def change
     add_column :projects, :second_description, :string
  end
end
