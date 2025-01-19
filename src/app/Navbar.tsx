export default function Navbar() {
	return (
		<div>
			<a
				className="flex items-center gap-2 hover:underline hover:underline-offset-4"
				href={process.env.NEXT_PUBLIC_CLIENT_URL + '/signup'}
				target="_blank"
				rel="noopener noreferrer"
			>
				Sign Up
			</a>

			<a
				className="flex items-center gap-2 hover:underline hover:underline-offset-4"
				href={process.env.NEXT_PUBLIC_CLIENT_URL + '/login'}
				target="_blank"
				rel="noopener noreferrer"
			>
				Login
			</a>

			<a
				className="flex items-center gap-2 hover:underline hover:underline-offset-4"
				href={process.env.NEXT_PUBLIC_CLIENT_URL + '/todo'}
				target="_blank"
				rel="noopener noreferrer"
			>
				Todo List
			</a>
		</div>
	)
}