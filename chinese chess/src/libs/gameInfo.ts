import {  SuperChess } from './../chesses/super.chess';
// 游戏资料

import { Camp } from '../utils/camp';
import { COL, ROW } from '../config/config';

export const camps = {
	// Acamps red 0
	/* 参数1 position 参数2: camp */
	redCamp: new Camp([
		new SuperChess(2,0)
	]),
	// Bcamps: black 1 位置是相对的 position:列*行-1
	blackCamp: new Camp([
		new SuperChess(COL * (ROW - 1) + 2,1)
	])
}