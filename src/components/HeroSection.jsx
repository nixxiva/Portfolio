import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
		>
				<div className="container max-w-4xl mx-auto text-center z-10">
					<div className="space-y-6">
						<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
							<span className="opacity-0 animate-fade-in"> Hi, I'm</span>
							<span className="text-primary opacity-0 animate-fade-in-delay-1"> 
								{" "}
								Sarah Angelica
							</span>
							<span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> 
								{" "}
								Bustinera
							</span>
						</h1>

						<p className="text-base md:text-sm text-muted-foreground max-1-1xl mx-auto opacity-0 animate-fade-in-delay-3">
							I'm a Junior Full-Stack Developer who has just completed the Avion School bootcamp. I built projects using JavaScript and Ruby on Rails, focusing on efficient code and compelling user experiences. I'm actively seeking opportunities to contribute to high value product development.
						</p>

						<div className="pt-4 opacity-0 animate-fade-in-delay-4">
							<a href="#projects" className="cosmic-button">						
									View My Work
							</a>
						</div>
					</div>
				</div>

				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
					<span className="text-sm text-muted-foreground mb-2"> Scroll </span>
					<ArrowDown className="h-5 w-5 text-primary"/>
				</div>
    </section>
  );
};