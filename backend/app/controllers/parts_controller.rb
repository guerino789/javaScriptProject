class PartsController < ApplicationController

    def index 
        parts = Part.all
        render json: parts
    end

    def show 
        part = Part.find(params[:id])
        render json: part
    end

    def create 
        part = Part.create(part_params)
            if part.valid?
                render json: part
            else
                render json: { errors: part.errors.full_messages }, status: :unprocessible_entity
            end
    end

    def update 
        part.update(part_params)
        if part.save
            render json: part
        else 
            render json: { errors: part.errors.full_messages }, status: :unprocessible_entity
        end
    end

    def destroy
        part = Part.find_by(id: params[:id])
        part.destroy
        render json: part
    end


    private

    def part_params
        params.require(:part).permit(:item, :brand, :model, :price, :computer_id)
    end


end