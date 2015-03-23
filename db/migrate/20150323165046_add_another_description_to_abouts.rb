class AddAnotherDescriptionToAbouts < ActiveRecord::Migration
  def change
    add_column :abouts, :second_description, :string
  end
end
