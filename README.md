# need to do follow things

1 Analyze the Current State: Examine the current state of the game. Make sure you understand the positions of all the pieces, possible legal moves, and any rules that need to be enforced.

2 Define the Rules: Ensure that you have a clear set of rules for your chess game. This should cover aspects like how each piece moves, castling, en passant, and promoting pawns.

3 Identify Missing Features: Determine what features or functionality are missing from your chess game. This could include implementing special moves, checking for checkmate, and handling game endings.

5 Design the Game Logic: Create the necessary data structures and algorithms to represent the chessboard, pieces, and their movements. Implement the rules of the game using your chosen programming language.

6 User Interface: Develop a user interface to allow players to interact with the game. This could be a graphical interface or a text-based one, depending on your preferences and skills.

7 Testing: Test the game thoroughly to ensure that all the rules are correctly implemented, and the game behaves as expected. Address any bugs or issues that you discover.

8 Iterate and Improve: Chess games can be quite complex, so don't be discouraged if your first attempt isn't perfect. Iterate on your game, refine the user experience, and add more features as needed.

9 Community or Resources: Consider seeking help from online communities or using resources like chess programming libraries or frameworks if you encounter difficulties.

# 1. Where the pawn can move next (where the pawn can move)

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
        >
			</div>
    </div>
  </div>
</div>	
```
>1 When the mouse moves away from the pawn, the cue point needs to disappear @mouseover event

>2 When a space is crossed, do not trigger the method

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

> 2 Define the method for getting the location

```ts
	const getId = (row: number,col: number) => (ROW - row - 1) * COL + col + 1
```

> 3 Save the current map with 'map'


```ts
	const map:Map<number,chessInterface> = new Map()
```

>4 set the map
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

>6 When entering, flash an area that can be moved

```scss
	@keyframs fade {
		0% {
			background-color: rgba(powderblue, 0.1);
		}
		50% {
			background-color: rgba(powderblue, 1);
		}
		100% {
			background-color: rgba(powderblue, 0.1);
		}
	}

	.moviable {
		animation: fade 2s;
		animation-iteration-count: infinite;
	}
```

>7 Super Pieces need to be transformed into methods that return the entire array

```ts
	import AREA from './../config/config';
	public canMove() :Array<number>{
		let p: Array<number> = []
		for (let i =0;i < AREA; i++) {
			p.push(i)
		}
		return p
	}
```
