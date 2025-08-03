import { useState } from "react";
import { Button } from "@/components/ui/button";
import heartsImage from "@/assets/hearts.png";

const SurpriseSection = () => {
  const [showSurprise, setShowSurprise] = useState(false);
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const createHeartExplosion = () => {
    const newHearts = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
    
    setHearts(newHearts);
    setShowSurprise(true);

    // Remove hearts after animation
    setTimeout(() => {
      setHearts([]);
    }, 3000);
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-romantic relative overflow-hidden flex items-center justify-center">
      {/* Animated Hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="fixed pointer-events-none z-50 text-4xl animate-sparkle"
          style={{
            left: heart.x,
            top: heart.y,
            animationDuration: "1.5s",
          }}
        >
          💖
        </div>
      ))}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {!showSurprise ? (
          <div className="space-y-12">
            <h2 className="text-5xl md:text-7xl font-romantic text-white romantic-glow">
              Ready for Your Surprise?
            </h2>
            
            <div className="relative inline-block">
              <Button
                onClick={createHeartExplosion}
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 font-romantic text-2xl px-12 py-6 rounded-full backdrop-blur-sm transition-all duration-500 hover:scale-110 dreamy-shadow"
              >
                Click Here for Your Surprise! 💝
              </Button>
              
              {/* Floating sparkles around button */}
              <div className="absolute -inset-4 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-white/60 animate-sparkle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                    }}
                  >
                    ✨
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in">
            <div className="text-6xl animate-heartbeat">🎉</div>
            
            <h3 className="text-4xl md:text-5xl font-romantic text-white romantic-glow">
              Surprise!
            </h3>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
              <div className="space-y-6 text-white">
                <p className="text-2xl md:text-3xl font-romantic leading-relaxed">
                  This is just the beginning...
                </p>
                <p className="text-xl md:text-2xl font-romantic leading-relaxed">
                  I can't wait to make every birthday as special as this one.
                </p>
                <p className="text-3xl md:text-4xl font-romantic heartbeat-animation">
                  I love you endlessly 💖
                </p>
              </div>
            </div>

            {/* Animated name writing effect */}
            <div className="mt-12">
              <div className="text-5xl md:text-6xl font-signature text-white romantic-glow animate-typewriter overflow-hidden whitespace-nowrap mx-auto w-fit">
                My Beautiful Love
              </div>
              <div className="w-64 h-1 bg-white/50 mx-auto mt-4 rounded-full animate-glow"></div>
            </div>

            {/* Fireworks effect */}
            <div className="fixed inset-0 pointer-events-none z-40">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-6xl animate-sparkle"
                  style={{
                    left: `${20 + (i * 10)}%`,
                    top: `${10 + (i * 8)}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: "2s",
                  }}
                >
                  🎆
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SurpriseSection;