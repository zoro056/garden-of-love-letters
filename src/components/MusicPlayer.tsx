import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const MusicPlayer = ({ isPlaying, onToggle }: { 
  isPlaying: boolean; 
  onToggle: (playing: boolean) => void; 
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        onToggle(false);
        toast("Music paused 🎵");
      } else {
        await audioRef.current.play();
        onToggle(true);
        toast("Playing your love song 💕");
      }
    } catch (error) {
      toast("Please interact with the page first to play music 🎵");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={toggleMusic}
        size="lg"
        className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90 text-primary-foreground romantic-shadow transition-all duration-300 hover:scale-110"
      >
        {isPlaying ? "⏸️" : "🎵"}
      </Button>
      
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        {/* You can add an actual audio file here */}
        <source src="/path-to-your-love-song.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default MusicPlayer;