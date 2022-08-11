class MemoController < ApplicationController
  def index
    memos = Memo.all
    render json: memos
  end

  def create
    # Active Recordの機能であるcreateメソッド
    Memo.create(memo_params)
    head :created
  end

  def destroy
    memo = Memo.find(params[:id])
    memo.destroy
    head :ok
  end

  def update
    memo = Memo.find(params[:id])
    memo.update(memo_params)
    head :ok
  end

  private
  def memo_params
    # paramsとはフロントから送られてくるデータ
    # ストロングパラメーターを設定しているparams.permit(:name, :is_done)
    params.require(:memo).permit(:title, :content, :url)
  end
end
