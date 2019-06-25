class AccountActivationsController < ApplicationController
  def edit
    user = User.find_by(email: params[:email])
    if user && !user.activated? && user.authenticated?(:activation, params[:id])
      @user = UserCreateService.new(params).call
      user.activate
      log_in user
      flash[:success] = "Gee! Registration is successful! ;-)"
      redirect_to root_path
    else
      flash[:danger] = "Oops! Activation link is invalid. :-("
      redirect_to root_path
    end
  end
end
