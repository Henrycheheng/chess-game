import { AREA } from './../config/config';
import { Chess, chessInterface } from './Chesses'

export class SuperChess extends Chess implements chessInterface {
	public name: string = '超级'
	public canMove(): Array<number> {
		let p: Array<number> = []
		for (let i = 1; i <= AREA; i++) {
			// 棋子不能走到本身的位置 =>
			if (i === this.positon) continue
			p.push(i)
		}
		return p
	}
	// 可以移动的点的1号点
}

// 棋子在初始化的时候处于自己方