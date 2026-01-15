import { useEffect, useState } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        //generateMeteors();
    }, []);

    const generateStars = () => {
        const newStars = [];
        for (let i = 0; i < 120; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 2 + 1, // 1-3px
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.3, // 0.3-0.8
                animationDuration: Math.random() * 3 + 2, // 2-5s twinkle
            });
        }
        setStars(newStars);
    };

    const generateMeteors = () => {
        const newMeteors = [];
        for (let i = 0; i < 4; i++) {
            newMeteors.push({
                id: i,
                x: Math.random() * 80 + 10, // 10-90%
                delay: Math.random() * 8 + i * 3, // Staggered delays
                duration: Math.random() * 2 + 4, // 4-6s
            });
        }
        setMeteors(newMeteors);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Dark gradient background */}
            <div
                className="absolute inset-0"
                style={{
                    background: `
                        radial-gradient(ellipse at 20% 0%, rgba(30, 40, 60, 0.4) 0%, transparent 50%),
                        radial-gradient(ellipse at 80% 100%, rgba(40, 30, 60, 0.3) 0%, transparent 50%),
                        linear-gradient(to bottom, hsl(222, 47%, 6%) 0%, hsl(222, 47%, 4%) 100%)
                    `
                }}
            />

            {/* Stars */}
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }}
                />
            ))}

            {/* Meteors */}
            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        left: meteor.x + "%",
                        top: "0%",
                        width: "150px",
                        height: "2px",
                        animationDelay: meteor.delay + "s",
                        animationDuration: meteor.duration + "s",
                    }}
                />
            ))}
        </div>
    );
};
