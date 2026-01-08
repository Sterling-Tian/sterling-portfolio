const projects = [{
    id:1,
    title:"Figure Drawing",
    description: "Drawing at Var Gallery",
    image: "/projects/Fig2.jpg",
    tags: ["FigureDrawing", "ink"]
    },
    {
       id:2,
    title:"Castelfidardo",
    description: "Sketched while visiting Castelfidardo, Italy",
    image: "/projects/Castelfidardo.jpg",
    tags: ["City", "Watercolor"] 
    },{
    id:3,
    title:"Jazz In the Park",
    description: "Salsa dancers at Jazz in the Park",
    image: "/projects/JazzInThePark.jpg",
    tags: ["City", "Ink"] 
    }

]

export const SectionArt=() => {

    return (
        <section id="art" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects </span>
                    </h2>
            </div>
        <p className="text-center text-muted-foreground mb-12 max-2-2xl mx-auto">
            Hello here is some art.
        </p>

        <div className="grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-8">
            {projects.map((project, key) =>(
            <div
                key={key}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                >
                    <div className=" overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                {/*TAGS */}    
                <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                            <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                        ))}
                    </div>
                </div>
                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                </p>
            </div>
            ))}

        </div>
        </section>
    )
}