class Api::V1::GreetingsController < ApplicationController
  def random
    render json: { message: random_message }
  end

  private

  def random_message
    Message.order('RANDOM()').first.message_text
  end
end
