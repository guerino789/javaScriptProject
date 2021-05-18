class ComputersController < ApplicationController

    def index 
        computers = Computer.all.order('name ASC')
        render json: computers 
    end

    def show 
        computer = Computer.find(params[:id])
        render json: computer, include: :parts
    end

    def create 
        computer = Computer.create(computer_params)
        render json: computer
    end

    def update 
        computer.update(computer_params)
        if computer.save
            render json: computer
        else
            render json: { errors: computer.errors.full_messages }, status: :unprocessible_entity
        end
    end

    def destroy 
        computer = Computer.find_by(id: params[:id])
        computer.destroy
        render json: computer
    end

    private

    def computer_params
        params.require(:computer).permit(:name)
    end


end