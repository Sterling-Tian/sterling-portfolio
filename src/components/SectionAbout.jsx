import {cn} from "@/lib/utils"
import { Code, Database, Handshake } from "lucide-react"

export const SectionAbout = () =>{
    return(
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Data <span className="text-primary"> Engineering </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">
                            I've been working as a data engineer for over four years, extracting data and creating data products to be analyzed. 
                        </h3>

                        
                    
                        
                    </div>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">Data Integration</h4>
                                        <p className="text-muted-foreground">
                                            I designed data pipelines to pull data in order to eliminate unecessary manual data entry.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                     <div className="p-3 rounded-full bg-primary/10">
                                    <Database className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">Data Products</h4>
                                        <p className="text-muted-foreground">
                                            I have streamlined data products in SQL by indexing and partitioning tables for seemless integration with PowerBI
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                    <Handshake className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">Experienced Scrum Master</h4>
                                        <p className="text-muted-foreground">
                                            I am Advanced Scrum Master certified and have worked as scrum master for multiple teams to provide value through iterative development.
                                        </p>
                                    </div>
                                </div></div> 
                        </div>
                                                <p className="text-muted-foreground">
                            Please feel free to download my resume if you'd like more details of my career!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                             <a
                                href="#contact"
                                className={cn("px-6 py-2 rounded-full border border-primary text-primary",
                                "hover:bg-primary/10 transition-colors duration-300")}>
                                Resume
                            </a>
                            
                            <a href="#contact" className="cosmic-button">
                                Contact
                            </a>

                           
                        </div>

                </div>
            </div>

        </section>
    )
}