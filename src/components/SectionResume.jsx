import { ArrowDown } from "lucide-react"

export const SectionResume = () => {
    return (
    <section 
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                {/* Image with text overlays */}
                <div className="relative inline-block">
                    <img
                        src="/projects/portrait.JPG"
                        alt="Sterling Tian portrait"
                        className="w-full max-w-lg mx-auto rounded-lg"
                        style={{ clipPath: 'inset(0 0 10% 0 round 0.5rem)' }}
                    />

                    {/* Top-left text */}
                    <div className="absolute top-5 left-8 text-left">
                        <span
                            className="text-3xl md:text-5xl font-bold opacity-0 animate-fade-in"
                            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}
                        >
                            Howdy! 
                        </span>
                    </div>
                     <div className="absolute top-5 right-23 text-right">
                        <span
                            className="text-3xl md:text-5xl font-bold opacity-0 animate-fade-in"
                            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}
                        >
                             I am
                        </span>
                    </div>

                    {/* Bottom text */}
                    <div className="absolute bottom-16 right-4 text-left">
                        <span
                            className="text-4xl md:text-6xl font-bold text-primary opacity-0 animate-fade-in-delay-1"
                            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}
                        >
                            Sterling Tian
                        </span>
                    </div>
                </div>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    Hello this is filler text about me.
                </p>
            </div>
        </div>
{/* Bouncing button */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce" >
            <span className="text-sm text-muted-foreground mb-2">
                Let's goooo!
            </span>
            <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
    </section>

)}