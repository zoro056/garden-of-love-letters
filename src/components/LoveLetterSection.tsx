import { useEffect, useRef, useState } from "react";

const LoveLetterSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const loveMessage = [
    "From the day we met, every moment has been brighter...",
    "Your smile lights up even my darkest days.",
    "You bring magic to the ordinary, love to the simple.",
    "Every laugh we share, every dream we build together,",
    "makes me fall deeper in love with you.",
    "On your special day, I just want you to know—",
    "I love you more than words could ever say.",
    "You are my heart, my soul, my everything.",
    "Happy Birthday, my beautiful love. 💖"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen py-20 px-4 dreamy-gradient relative overflow-hidden"
    >
      {/* Floating Petals Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary/20 text-lg animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            🌸
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-signature text-primary romantic-glow">
            A Letter From My Heart
          </h2>
          <div className="w-32 h-1 bg-gradient-sunset mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 romantic-shadow border border-primary/20">
          <div className="space-y-8">
            {loveMessage.map((line, index) => (
              <p
                key={index}
                className={`text-xl md:text-2xl font-romantic text-foreground leading-relaxed text-center transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                {line.includes("love") || line.includes("beautiful") ? (
                  <span className="heartbeat-animation text-primary font-bold">
                    {line}
                  </span>
                ) : (
                  line
                )}
              </p>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-3xl font-signature text-primary romantic-glow">
              Forever yours,
            </p>
            <p className="text-4xl font-signature text-accent mt-2 heartbeat-animation">
              Your Love 💕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetterSection;