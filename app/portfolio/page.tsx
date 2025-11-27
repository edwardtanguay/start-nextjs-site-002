import { ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
	{
		title: "E-commerce Platform",
		category: "Web Development",
		description: "A full-featured online store with secure payment processing and inventory management.",
	},
	{
		title: "Financial Dashboard",
		category: "UI/UX Design",
		description: "A complex data visualization dashboard for a fintech startup.",
	},
	{
		title: "Health & Wellness App",
		category: "Mobile App",
		description: "A cross-platform mobile application for tracking fitness and nutrition.",
	},
	{
		title: "Corporate Rebranding",
		category: "Branding",
		description: "Complete visual identity overhaul for a logistics company.",
	},
	{
		title: "Real Estate Portal",
		category: "Web Development",
		description: "Property listing platform with advanced search and map integration.",
	},
	{
		title: "Social Media Campaign",
		category: "Marketing",
		description: "Viral marketing campaign for a new consumer product launch.",
	},
];

export default function Portfolio() {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div className="mb-12">
				<h1 className="text-3xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
				<p className="text-lg text-gray-600 max-w-2xl">
					Explore our latest work and see how we've helped our clients achieve their goals.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project, index) => (
					<div key={index} className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
						<div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400">
							{/* Placeholder for project image */}
							<span className="text-sm">Project Image</span>
						</div>
						<div className="p-6">
							<div className="text-sm font-medium text-gray-500 mb-1">{project.category}</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
							<p className="text-gray-600 mb-4">{project.description}</p>
							<Link href="#" className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-700">
								View Case Study
								<ExternalLink className="ml-1 h-4 w-4" />
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
