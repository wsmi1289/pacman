class MenController < ApplicationController
  def update
    @PacMan = Pacman.find(params[:id])
    @Ghosts = Ghost.all

    #if button_pressed?
      @PacMan.move(pacman_params)
   # end
  end

  private

  def pacman_params
    @pacman_params = params.require(:pacman).permit(
      :row,
      :column)

  end
end
