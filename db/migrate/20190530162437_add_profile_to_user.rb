<<<<<<< HEAD
=======
# frozen_string_literal: true

# Profile-to-User db class
>>>>>>> 2d1e8af45e5788ad0fd3075cfa6e76676e88a582
class AddProfileToUser < ActiveRecord::Migration[5.2]
  def change
    add_reference :profiles, :user, foreign_key: true
  end
end
