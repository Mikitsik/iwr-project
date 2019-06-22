class AccountActivationsController < ApplicationController
  def edit
    user = User.find_by(email: params[:email])
    if user && !user.activated? && user.authenticated?(:activation, params[:id])
      user.activate
      ProfileCreateService.new(user_id: user.id).call!
      log_in user
      flash[:success] = "Welcome, registration is successful!"
      redirect_to root_path
    else
      flash[:danger] = "Invalid activation link"
      redirect_to root_path
    end
  end
end
