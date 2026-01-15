import { ArrowDown } from "lucide-react"

export const SectionResume = () => {
    return (
    <section 
        id="resume"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-15"
    >
        <div className="container max-w-6xl mx-auto text-center z-10">
            <div className="space-y-6">
                {/* Image with text overlays */}
                <div className="relative inline-block overflow-hidden rounded-lg">
                    <img
                        src="/projects/portrait.JPG"
                        alt="Sterling Tian portrait"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto"
                        style={{
                            transform: 'scale(1.2)',
                            transformOrigin: 'center center',
                            clipPath: 'inset(12% 0 22% 0 round 0.5rem)'
                        }}
                    />

                    {/* Top-left text */}
                    <div
                        className="absolute text-left"
                        style={{ top: '7%', left: '20%' }}
                    >
                        <span
                            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold slide-in-left inline-block"
                            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}
                        >
                            Howdy!
                        </span>
                    </div>
                    {/* Top-right text */}
                    <div
                        className="absolute text-right"
                        style={{ top: '7%', right: '35%' }}
                    >
                        <span
                            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary font-bold slide-in-right inline-block"
                            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}
                        >
                            I am
                        </span>
                    </div>

                    {/* Bottom text */}
                    <div
                        className="absolute text-right"
                        style={{ bottom: '24%', right: '5%' }}
                    >
                        <span
                            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold slide-in-bottom inline-block"
                            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}
                        >
                            Sterling
                            <span className="text-primary"> Tian</span>
                        </span>
                    </div>
                </div>

                <p className="text-lg md:text-xl text-muted-foreground w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto opacity-0 animate-fade-in-delay-3 -mt-18">
                    I am a professional data engineer, artist, and aspiring accordionist.
                </p>

                {/* Bouncing button */}
                <div className="flex flex-col items-center animate-bounce pt-4">
                    <span className="text-sm text-muted-foreground mb-2 text-primary">
                        Let's goooo!
                    </span>
                    <ArrowDown className="h-5 w-5" />
                </div>
            </div>
        </div>
    </section>

)}