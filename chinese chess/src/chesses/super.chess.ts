import { Chess, chessInterface } from './Chesses'

export class SuperChess extends Chess implements chessInterface {
	public name: string = '超级'
	public canMove: Array<number> = [1]
}

// 棋子在初始化的时候处于自己方