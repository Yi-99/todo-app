import type { TodoItem } from '../app/todo/page';

type Action =
	| { type: 'CREATE_TODO_ITEM'; payload: TodoItem }
	| { type: 'TOGGLE_TODO_ITEM'; index: number };

export function itemReducer(items: TodoItem[], action: Action): TodoItem[] {
	switch (action.type) {
		case 'CREATE_TODO_ITEM':
			return [...items, action.payload];
		case 'TOGGLE_TODO_ITEM':
			return items.map((item, index) => index === action.index ? { ...item, isDone: !item.isDone } : item);
		default:
			return items;
	}
}