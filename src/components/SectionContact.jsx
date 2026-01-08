import {Facebook, Instagram, Linkedin, Mail, MapPin, Phone} from "lucide-react"
import {cn} from "@/lib/utils"
export const SectionContact =() => {
    return(
        <section 
        id="contact"
        className="py-24 px-4 relative bg-secondary/30">
           <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Feel free to reach out! I'm always interested in discussing new opportunities.
                </p>

                <div className="pt-5">    
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6 justify-center">
                            Contact Information
                        </h3>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div className="">
                                <h4 className="text-center">Email</h4>
                                <a href="mailto:sterling.tian@gmail.com" 
                                className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Sterling.Tian@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div >
                                <h4 >Phone</h4>
                                <a href="tel:+14142487658" 
                                className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    +1 (414) 555-1111
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div >
                                <h4>Location</h4>
                                <a 
                                className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Milwaukee, Wisconsin, United States
                                </a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="pt-8">
                        <h4>Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/sterlingtian/" target="_blank">
                                <Linkedin/>
                            </a>
                            <a href="https://www.instagram.com/sterlingtian/" target="_blank">
                                <Instagram/>
                            </a>
                            <a href="https://www.facebook.com/sterling.tian" target="_blank">
                                <Facebook/>
                            </a>
                        </div>
                    </div>
                    
                    
                    </div>
                </div>
               
            </div> 

        </section>
    )
}