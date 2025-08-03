import { useState } from "react";
import { Button } from "@/components/ui/button";

const SurpriseSection = () => {
  const [showSurprise, setShowSurprise] = useState(false);

  const revealSurprise = () => {
    setShowSurprise(true);
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-romantic relative overflow-hidden flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {!showSurprise ? (
          <div className="space-y-12 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-romantic text-white romantic-glow">
              Ready for Your Surprise?
            </h2>
            
            <div className="relative inline-block">
            <Button
              onClick={revealSurprise}
                size="lg"
              className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 font-romantic text-2xl px-12 py-6 rounded-full backdrop-blur-sm transition-all duration-500 hover:scale-110 dreamy-shadow group"
            >
              <span className="inline-block transition-transform duration-300 group-hover:scale-110">
                Click Here for Your Surprise! 💝
              </span>
            </Button>
            
            {/* Gentle floating sparkles around button */}
            <div className="absolute -inset-8 pointer-events-none">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-white/40 text-xl animate-float"
                  style={{
                    left: `${25 + i * 20}%`,
                    top: `${20 + i * 15}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${3 + i * 0.5}s`
                  }}
                >
                  ✨
                </div>
              ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Smooth reveal animation */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-6xl mb-6 animate-heartbeat">🎉</div>
              
              <h3 className="text-4xl md:text-5xl font-romantic text-white romantic-glow">
                Surprise!
              </h3>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 transform transition-all duration-700 hover:scale-105">
                <div className="space-y-6 text-white">
                  <p className="text-2xl md:text-3xl font-romantic leading-relaxed animate-fade-in" style={{ animationDelay: '1s' }}>
                    This is just the beginning...
                  </p>
                  <p className="text-xl md:text-2xl font-romantic leading-relaxed animate-fade-in" style={{ animationDelay: '1.3s' }}>
                    I can't wait to make every birthday as special as this one.
                  </p>
                  <p className="text-3xl md:text-4xl font-romantic heartbeat-animation animate-fade-in" style={{ animationDelay: '1.6s' }}>
                    I love you endlessly 💖
                  </p>
                </div>
              </div>
            </div>

            {/* Elegant name reveal */}
            <div className="mt-12 animate-fade-in" style={{ animationDelay: '2s' }}>
              <div className="text-5xl md:text-6xl font-signature text-white romantic-glow">
                My Beautiful Love
              </div>
              <div className="w-64 h-1 bg-white/50 mx-auto mt-4 rounded-full animate-glow"></div>
            </div>

            {/* Gentle sparkle effects */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-white/30 text-3xl animate-float"
                  style={{
                    left: `${15 + i * 15}%`,
                    top: `${20 + i * 10}%`,
                    animationDelay: `${2 + i * 0.4}s`,
                    animationDuration: `${4 + i * 0.5}s`,
                  }}
                >
                  ✨
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