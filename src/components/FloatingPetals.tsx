import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
  emoji: string;
}

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const petalEmojis = ["🌸", "🌺", "🌹", "💖", "✨", "🎀"];
    
    const newPetals = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 8 + Math.random() * 6,
      animationDelay: Math.random() * 8,
      size: 0.8 + Math.random() * 0.4,
      emoji: petalEmojis[Math.floor(Math.random() * petalEmojis.length)],
    }));

    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute opacity-70 animate-fall"
          style={{
            left: `${petal.left}%`,
            fontSize: `${petal.size * 2}rem`,
            animationDuration: `${petal.animationDuration}s`,
            animationDelay: `${petal.animationDelay}s`,
            top: "-10%",
          }}
        >
          {petal.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingPetals;