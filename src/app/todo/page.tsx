'use client';

import Link from 'next/link';
import React from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { itemReducer } from '../../reducers/ItemReducer';

export default function TodoPage() {
	const [list, setList] = React.useState<TodoItem[]>([]);
	const [title, setTitle] = React.useState<string>('');
	const [description, setDescription] = React.useState<string>('');
	const [state, dispatch] = React.useReducer(itemReducer, []);

	const error = (message: string) => toast.error(message);
	const warn = (message: string) => toast.warn(message);
	const success = (message: string) => toast.success(message);
	const info = (message: string) => toast.info(message);

	const handleCreateTodoItem = (e: React.FormEvent) => {
		e.preventDefault();

		if (title.trim() === '' || description.trim() === '') {
			error('Title and Description are required');
			return;
		}

		const newTodoItem: TodoItem = {
			title,
			description,
			isDone: false,
		}

		dispatch({ type: 'CREATE_TODO_ITEM', payload: newTodoItem });
		setList([...list, newTodoItem]);

		success("Todo item created!");

		setTitle('');
		setDescription('');
	}

	React.useEffect(() => {

	})

	const handleCheckbox = (index: number) => {
		dispatch({ type: 'TOGGLE_TODO_ITEM', index });

		const newList = list.map((item, i) => 
			i === index ? { ...item, isDone: !item.isDone } : item
		)
		setList(newList);
		console.log("list", list);
	}

	return (
		<>
			<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
				<div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
					Todo Page
					<div className="">
						<ul>
							{
								state.map((item: TodoItem, index) => {
									return (
										<li key={index} className="flex items-center gap-2">
											<label>
												<input type="checkbox" className="accent-pink-500 focus:accent-pink-700" checked={item.isDone} onChange={() => handleCheckbox(index)}/>
											</label>
											{ item.title }
											{ item.description }
										</li>
									)
								})
							}
						</ul>
					</div>
				</div>

				<div className="flex flex-row justify-center items-center">
					<form className="flex flex-col gap-4" onSubmit={handleCreateTodoItem}>
						<input type="text" className="" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title}/>
						<input type="text" className="" placeholder="Description" onChange={(e) => setDescription(e.target.value)} value={description}/>
						<button type="submit" className="">Create</button>
						<ToastContainer 
							position="bottom-right"
							autoClose={5000}
							hideProgressBar={false}
							newestOnTop={true}
							closeOnClick={true}
							closeButton={true}
							theme="colored"
							pauseOnHover
							transition={Bounce}
						/>
					</form>
				</div>

				
			</div>
			<Link href="/" className="hover:underline">Back to Home</Link>
		</>
	)
}

export interface TodoItem {
	title: string;
	description: string;
	isDone: boolean;
}