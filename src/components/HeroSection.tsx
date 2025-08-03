import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = ({ onReadLetter, onPlayMusic }: { 
  onReadLetter: () => void; 
  onPlayMusic: () => void; 
}) => {
  const [typedText, setTypedText] = useState("");
  const [showButtons, setShowButtons] = useState(false);
  
  const fullText = "To the most beautiful soul I've ever known...";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowButtons(true), 1000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-cover bg-center"
      style={{ 
        backgroundImage: `url(https://images.unsplash.com/photo-1470813740244-df37b8c1eecb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Romantic overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background/10 to-primary/30" />
      
      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary/30 text-2xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-romantic romantic-glow text-primary mb-8 heartbeat-animation">
          Happy Birthday, My Love
        </h1>
        
        <div className="text-2xl md:text-3xl font-romantic text-primary-glow min-h-[3rem] mb-12">
          {typedText}
          <span className="animate-pulse">|</span>
        </div>

        {showButtons && (
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
            <Button
              onClick={onReadLetter}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-romantic text-xl px-8 py-4 rounded-full romantic-shadow transition-all duration-500 hover:scale-105"
            >
              Read Your Letter ❤️
            </Button>
            
            <Button
              onClick={onPlayMusic}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-romantic text-xl px-8 py-4 rounded-full transition-all duration-500 hover:scale-105"
            >
              Play Song 🎵
            </Button>
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;