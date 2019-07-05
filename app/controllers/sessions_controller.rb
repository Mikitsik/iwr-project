# frozen_string_literal: true

class SessionsController < ApplicationController
  def create
    @user = User.find_by(email: params[:session][:email].downcase)
    unless @user&.authenticate(params[:session][:password])
      flash[:warning] = "Huhh.. Type your email or password correctly! ;-)"
      redirect_to root_path
    else
      user_activation_check
    end
  end

  def user_activation_check
    if @user.activated?
      log_in @user
      params[:session][:remember_me] == '1' ? remember(@user) : forget(@user)
      redirect_to profile_path(user_profile)
    else
      flash[:warning] = "Uh-oh! You didn't check your mailbox yet?"
      redirect_to root_path
    end
  end

  def destroy
    log_out if logged_in?
    redirect_to root_path
  end

  private

  def user_profile
    @user.profile.id
  end
end
