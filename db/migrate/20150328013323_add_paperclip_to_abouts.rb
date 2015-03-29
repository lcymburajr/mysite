class AddPaperclipToAbouts < ActiveRecord::Migration
  def change
    add_attachment :abouts, :document
  end
end
