// camp类
import { chessInterface } from './../chesses/Chesses';

// 需要表示2个阵营的共有的属性

export class Camp {
	// public kills: Array<chess> = [] // 用来表示我方阵营 吃掉对方棋子的数组
	public kills: Array<chessInterface> = [] // 用来表示我方阵营 吃掉对方棋子的数组
	// chessInterface 改成chessInterface 才可以访问到 chess.name

	// 接收一个 chesses 来自于 Chess 这个类
	constructor( private chesses: Array<chessInterface>) {}
	/**
	 * name
	 */
	public get(): chessInterface[] {
		return this.chesses
	}
}