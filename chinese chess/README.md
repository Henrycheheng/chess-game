# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.


# 1.棋子下一步可以走的地点(棋子可以移动的位置)


```html
	<div class="Game">
    <div class="board">
      <div v-for="(row,index) in ROW" :key="row" class="row">
        <div
          class="block"
          :id="(ROW - index - 1) * COL + i + 1 + ''"
          v-for="(col,i) in COL"
          :key="col"
          @mouseover="hover(getId(index, i))"
          @mouseout="out(getId(index, i))"
        ></div>
      </div>
    </div>
  </div>
```

>1 当鼠标从棋子上离开时,提示点位需要消失 @mouseover 事件

>2 当划过空格子,不要触发方法
```tsx
	const hover = (position: number) {
		if (GEBI(position + '')!.innerText === '') return
		console.log(1)
	}
	const out = (position: number) {
		if (GEBI(position + '')!.innerText === '') return
		console.log(2)
	}
```

> 2 定义获取位置的方法

```ts
	const getId = (row: number,col: number) => (ROW - row - 1) * COL + col + 1
```

> 3 使用 `map`保存当前的地图

```ts
	const map:Map<number,chessInterface> = new Map()
```

>4 设置map
```ts
	const initMap = () => {
		for (const [k,camp] of Object.entries(camps)) {
			camp.get().forEach((chess, ) => {
				GEBI(`${chess.position}`)!.innerText = chess.name;
				GEBI(`${chess.position}`)!.classList.add('chess');
				map.set(chess.position,chess)
			})
		}
	}
```

>5 map 判断

```ts
	const over = () => {
		if (!map.has(position)) return
		console.log(1)
	}
	const out = () =>{
		if (!map.has(position)) return
		console.log(2)
	}
```

>6 进入的时候,闪烁可以移动的区域

```ts

```