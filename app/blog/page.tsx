import Link from "next/link";
import { Calendar, User } from "lucide-react";

const posts = [
	{
		title: "The Future of Web Development in 2024",
		excerpt: "Explore the emerging trends and technologies that will shape the web development landscape in the coming year.",
		date: "Mar 15, 2024",
		author: "Alex Johnson",
		category: "Technology",
	},
	{
		title: "Mastering UI/UX Design Principles",
		excerpt: "A comprehensive guide to creating intuitive and engaging user interfaces that delight users.",
		date: "Mar 10, 2024",
		author: "Sarah Williams",
		category: "Design",
	},
	{
		title: "Optimizing Website Performance",
		excerpt: "Learn practical strategies and techniques to improve your website's speed and overall performance.",
		date: "Mar 05, 2024",
		author: "Michael Brown",
		category: "Development",
	},
	{
		title: "Effective Digital Marketing Strategies",
		excerpt: "Discover how to leverage digital channels to reach your target audience and drive business growth.",
		date: "Feb 28, 2024",
		author: "Emily Davis",
		category: "Marketing",
	},
];

export default function Blog() {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div className="mb-12">
				<h1 className="text-3xl font-bold text-gray-900 mb-4">Latest Insights</h1>
				<p className="text-lg text-gray-600 max-w-2xl">
					Stay updated with our latest thoughts, tutorials, and industry news.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
				{posts.map((post, index) => (
					<article key={index} className="flex flex-col items-start">
						<div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
							<span className="bg-gray-100 text-gray-800 px-2.5 py-0.5 rounded-full font-medium">
								{post.category}
							</span>
							<span className="flex items-center gap-1">
								<Calendar className="h-3 w-3" />
								{post.date}
							</span>
						</div>
						<h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-gray-600 transition-colors">
							<Link href="#">{post.title}</Link>
						</h2>
						<p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
						<div className="flex items-center gap-2 text-sm text-gray-500 mt-auto">
							<User className="h-4 w-4" />
							<span>{post.author}</span>
						</div>
					</article>
				))}
			</div>
		</div>
	);
}
