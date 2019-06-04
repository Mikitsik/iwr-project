<<<<<<< HEAD
=======
# frozen_string_literal: true

# Class for delete column "Profile id" in User table
>>>>>>> 2d1e8af45e5788ad0fd3075cfa6e76676e88a582
class DeleteColumnProfileIdFromUser < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :profile_id
  end
end
