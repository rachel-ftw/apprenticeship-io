class Api::ApprenticesController < ApplicationController
  def index
    render json: Apprentice.all
  end

  def login
    apprentice = Apprentice.find_or_create_from_auth_hash(auth_hash)
    binding.pry
    render json: apprentice
  end

  protected

  def auth_hash
    request.env['omniauth.auth']
  end

  private

  def apprentice_params
    params.require(:apprentice).permit(
      :first_name,
      :last_name,
      :linkedin_image_url,
      :current_title,
      :current_company,
      :apprenticeship_company,
      :email
    )
  end
end
