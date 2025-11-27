import { Code, Layout, Smartphone, BarChart } from "lucide-react";

const services = [
	{
		title: "Web Development",
		description: "Custom websites built with the latest technologies to ensure performance, security, and scalability.",
		icon: Code,
	},
	{
		title: "UI/UX Design",
		description: "Intuitive and engaging designs that provide a seamless user experience across all devices.",
		icon: Layout,
	},
	{
		title: "Mobile App Development",
		description: "Native and cross-platform mobile applications that extend your reach to mobile users.",
		icon: Smartphone,
	},
	{
		title: "Digital Strategy",
		description: "Data-driven strategies to increase your online visibility and drive business growth.",
		icon: BarChart,
	},
];

export default function Services() {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div className="text-center mb-12">
				<h1 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h1>
				<p className="text-lg text-gray-600 max-w-2xl mx-auto">
					We offer a comprehensive range of digital services to help your business thrive in the modern world.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{services.map((service, index) => {
					const Icon = service.icon;
					return (
						<div key={index} className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
							<div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 text-gray-900">
								<Icon className="h-6 w-6" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
							<p className="text-gray-600">{service.description}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
