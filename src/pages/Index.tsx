import { useState, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import LoveLetterSection from "@/components/LoveLetterSection";
import SurpriseSection from "@/components/SurpriseSection";
import FloatingPetals from "@/components/FloatingPetals";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const letterRef = useRef<HTMLDivElement>(null);

  const scrollToLetter = () => {
    letterRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    });
  };

  const handlePlayMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative">
      {/* Floating Petals Background */}
      <FloatingPetals />
      
      {/* Hero Section */}
      <HeroSection 
        onReadLetter={scrollToLetter}
        onPlayMusic={handlePlayMusic}
      />
      
      {/* Love Letter Section */}
      <div ref={letterRef}>
        <LoveLetterSection />
      </div>
      
      {/* Surprise Section */}
      <SurpriseSection />
      
      {/* Music Player */}
      <MusicPlayer 
        isPlaying={isPlaying}
        onToggle={setIsPlaying}
      />
    </div>
  );
};

export default Index;
