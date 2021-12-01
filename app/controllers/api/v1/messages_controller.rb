module Api
  module V1
    class MessagesController < ApplicationController
      def index
        greeting = Message.offset(rand(Message.count)).first
        render json: greeting
      end
    end
  end
end
