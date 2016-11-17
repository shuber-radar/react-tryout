class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :set_routes

  private

  def set_routes
    @routes = [
      {
        route: root_path,
        name: 'home'
      },
      {
        route: users_path,
        name: 'users'
      }
    ]
  end
end
