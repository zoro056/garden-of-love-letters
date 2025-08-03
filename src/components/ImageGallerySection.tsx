import { useEffect, useState } from "react";

const ImageGallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Curated romantic and nature images
  const images = [
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Beautiful Moments Together",
      alt: "two brown deer beside trees and mountain"
    },
    {
      src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Like Sunshine Through Trees",
      alt: "sun light passing through green leafed tree"
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Our Love Reaches New Heights",
      alt: "landscape photography of mountain hit by sun rays"
    },
    {
      src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Endless Like Ocean Waves",
      alt: "ocean wave at beach"
    },
    {
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Magical Moments We Create",
      alt: "yellow lights between trees"
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Peaceful Times Together",
      alt: "body of water surrounded by trees"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds for smoother experience

    return () => clearInterval(interval);
  }, [images.length]);

  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % images.length;
      visibleImages.push({ ...images[index], position: i });
    }
    return visibleImages;
  };

  return (
    <section className="py-20 px-4 bg-gradient-dreamy relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-signature text-primary romantic-glow mb-4">
            Our Beautiful Journey
          </h2>
          <p className="text-xl font-romantic text-muted-foreground">
            Every moment with you is a treasure ✨
          </p>
          <div className="w-32 h-1 bg-gradient-sunset mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Enhanced smooth auto-scrolling image gallery */}
        <div className="relative h-96 flex items-center justify-center">
          <div className="flex items-center justify-center w-full max-w-6xl relative">
            {getVisibleImages().map((image, index) => (
              <div
                key={`${image.src}-${currentIndex}-${index}`}
                className={`absolute transition-all duration-1000 ease-out transform ${
                  index === 1 
                    ? 'scale-110 z-20 opacity-100 translate-x-0' 
                    : index === 0
                    ? 'scale-90 z-10 opacity-60 -translate-x-80'
                    : 'scale-90 z-10 opacity-60 translate-x-80'
                }`}
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="relative overflow-hidden rounded-2xl romantic-shadow group cursor-pointer">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-80 h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  
                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-lg font-romantic text-center drop-shadow-lg">
                      {image.caption}
                    </p>
                    <div className="w-16 h-0.5 bg-white/60 mx-auto mt-2 rounded-full"></div>
                  </div>
                  
                  {/* Floating hearts on hover */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute text-2xl opacity-0 group-hover:opacity-100 group-hover:animate-float transition-all duration-500"
                        style={{
                          left: `${15 + i * 25}%`,
                          top: `${15 + i * 20}%`,
                          animationDelay: `${i * 0.3}s`,
                          transitionDelay: `${i * 0.1}s`,
                        }}
                      >
                        💖
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 hover:scale-125 ${
                  index === currentIndex
                    ? 'bg-primary scale-125 shadow-lg shadow-primary/50'
                    : 'bg-primary/30 hover:bg-primary/60 scale-100'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Enhanced side decorative elements */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-6xl text-primary/20 animate-float">
            🌸
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-6xl text-primary/20 animate-float" style={{ animationDelay: '1s' }}>
            🌸
          </div>
        </div>

        {/* Enhanced progress bar with gradient */}
        <div className="mt-12 max-w-md mx-auto">
          <div className="w-full bg-primary/20 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-sunset h-2 rounded-full transition-all duration-5000 ease-linear relative"
              style={{ 
                width: `${((currentIndex + 1) / images.length) * 100}%`,
              }}
            >
              <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
            </div>
          </div>
          <p className="text-center mt-3 text-sm font-romantic text-muted-foreground transition-all duration-300">
            {currentIndex + 1} of {images.length} precious memories ✨
          </p>
        </div>
      </div>

      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary/10 text-4xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            ✨
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallerySection;