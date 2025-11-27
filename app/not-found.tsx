import Link from 'next/link'

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-4 text-center">
			<h2 className="text-3xl font-bold text-gray-900">Page Not Found</h2>
			<p className="text-gray-600">Could not find the requested resource.</p>
			<Link
				href="/"
				className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800 transition-colors"
			>
				Return Home
			</Link>
		</div>
	)
}
