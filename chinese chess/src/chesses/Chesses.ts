/* 抽象一个公共的棋子的类 */
// 每一个棋子 相对于自身的位置 都有 它下一步可以走的点
// 存在一种特殊情况 没有任何点可以走

// name
// camp
// position
// inWhichArea: number
// canMove


export interface chessInterface {
	name: string;
	camp: number; // 0 red 1 black
	positon: number;
	inWhichArea: number;
	canMove: ()=> Array<number>
}

export class Chess {
	// 开始时候每个棋子固定位置和固定的阵营

	// 命名一个 inWhichArea
	public inWhichArea: number;
static canMove: any;
	constructor(public positon: number, public camp: number) {
		// 构造函数自动把参数作为类的属性,也可以给定默认位置
		this.inWhichArea = camp;
	}
}