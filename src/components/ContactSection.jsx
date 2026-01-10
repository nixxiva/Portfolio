import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { UnderConstruction } from "../pages/UnderConstruction";
// import { useToast } from "@/hooks/use-toast";
// import { Description } from "@radix-ui/react-toast";

export const ContactSection = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	// const { toast } = useToast();

	const handleSubmit = (e) => {
		e.preventDefault();

		setIsSubmitted(true);

		setTimeout(() => {
			// toast({
			// 	title: "Message sent!",
			// 	Description: "Thank you for your message, I'll get back to you soonest."
			// })
		}, 1500);
	};

	return (
		<section
			id="contact"
			className="py-24 px-4 relative bg-secondary/30"
		>
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					Get In <span className="text-primary">Touch</span>
				</h2>

				<p className="text-center text-muted-foreground max-w-2xl mx-auto">
					Let's connect! I am open to exploring freelance collaborations and full-time employment opportunities.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					{/* LEFT COLUMN */}
					<div className="space-y-8">
						<h3 className="text-2xl font-semibold mb-6">
							Contact Information
						</h3>

						<div className="space-y-6 justify-center">
							<div className="flex items-start space-x-4">
								<div className="p-3 rounded-full bg-primary/10">
									<Mail className="h-6 w-6 text-primary" />
								</div>

								<div>
									<h4 className="font-medium">Email</h4>
									<a
										href="mailto:sarahbustinera24@gmail.com"
										className="text-muted-foreground hover:text-primary transition-colors"
									>
										sarahbustinera24@gmail.com
									</a>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="p-3 rounded-full bg-primary/10">
									<Phone className="h-6 w-6 text-primary" />
								</div>

								<div>
									<h4 className="font-medium">Phone</h4>
									<a
										href="tel:+639235393276"
										className="text-muted-foreground hover:text-primary transition-colors"
									>
										+63 923 539 3276 | +63 962 848 0254
									</a>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="p-3 rounded-full bg-primary/10">
									<MapPin className="h-6 w-6 text-primary" />
								</div>

								<div>
									<h4 className="font-medium">Location</h4>
									<a className="text-muted-foreground hover:text-primary transition-colors">
										Taguig, NCR, Philippines
									</a>
								</div>
							</div>
						</div>

						<div className="pt-8">
							<h4 className="font-medium mb-4">Connect With Me</h4>
							<div className="flex space-x-4 justify-center">
								<a
									href="https://www.linkedin.com/in/sarah-angelica-bustinera-a933612ab/"
									target="_blank"
								>
									<Linkedin />
								</a>

								<a
									href="https://www.facebook.com/asarah249"
									target="_blank"
								>
									<Facebook />
								</a>

								<a
									href="https://www.instagram.com/srhbstnr/"
									target="_blank"
								>
									<Instagram />
								</a>
							</div>
						</div>
					</div>

					{/* RIGHT COLUMN */}
					<div className="bg-card p-8 rounded-lg shadow-xs">
						{isSubmitted ? (
							<div className="flex flex-col items-center justify-center min-h-[300px] text-center">
								<UnderConstruction />
								<button
									onClick={() => setIsSubmitted(false)}
									className="mt-4 text-primary underline text-sm"
								>
									Go back to form
								</button>
							</div>
						) : (
							<>
								<h3 className="text-2xl font-semibold mb-6">
									Send a Message
								</h3>

								<form
									className="space-y-6"
									onSubmit={handleSubmit}
								>
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium mb-2"
										>
											Your Name
										</label>
										<input
											type="text"
											id="name"
											name="name"
											required
											className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
											placeholder="Sarah Bustinera..."
										/>
									</div>

									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium mb-2"
										>
											Your Email
										</label>
										<input
											type="email"
											id="email"
											name="email"
											required
											className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
											placeholder="juan@gmail.com"
										/>
									</div>

									<div>
										<label
											htmlFor="message"
											className="block text-sm font-medium mb-2"
										>
											Your Message
										</label>
										<textarea
											id="message"
											name="message"
											required
											className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
											placeholder="Hello! I'd like to talk about..."
										/>
									</div>

									<button
										type="submit"
										className={cn(
											"cosmic-button w-full flex items-center justify-center gap-2"
										)}
									>
										Send Message
										<Send size={16} />
									</button>
								</form>
							</>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};
