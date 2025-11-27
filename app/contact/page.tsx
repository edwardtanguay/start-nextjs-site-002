import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div className="text-center mb-12">
				<h1 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h1>
				<p className="text-lg text-gray-600 max-w-2xl mx-auto">
					Have a project in mind? We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
				{/* Contact Info */}
				<div className="space-y-8">
					<div className="bg-white p-6 rounded-lg border border-gray-200">
						<h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h2>
						<div className="space-y-6">
							<div className="flex items-start gap-4">
								<Mail className="h-6 w-6 text-gray-600 mt-1" />
								<div>
									<p className="font-medium text-gray-900">Email</p>
									<p className="text-gray-600">contact@example.com</p>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<Phone className="h-6 w-6 text-gray-600 mt-1" />
								<div>
									<p className="font-medium text-gray-900">Phone</p>
									<p className="text-gray-600">+1 (555) 123-4567</p>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<MapPin className="h-6 w-6 text-gray-600 mt-1" />
								<div>
									<p className="font-medium text-gray-900">Office</p>
									<p className="text-gray-600">
										123 Business Avenue<br />
										Suite 100<br />
										New York, NY 10001
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Contact Form */}
				<div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
					<form className="space-y-6">
						<div>
							<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
								Name
							</label>
							<input
								type="text"
								id="name"
								className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
								placeholder="Your Name"
							/>
						</div>
						<div>
							<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
								Email
							</label>
							<input
								type="email"
								id="email"
								className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
								placeholder="you@example.com"
							/>
						</div>
						<div>
							<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
								Message
							</label>
							<textarea
								id="message"
								rows={4}
								className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
								placeholder="How can we help you?"
							/>
						</div>
						<button
							type="submit"
							className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
						>
							Send Message
							<Send className="ml-2 h-4 w-4" />
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
