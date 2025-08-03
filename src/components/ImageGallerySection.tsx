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
    }, 4000); // Change image every 4 seconds

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

        {/* Auto-scrolling image gallery */}
        <div className="relative h-96 flex items-center justify-center">
          <div className="flex items-center space-x-8 w-full max-w-5xl">
            {getVisibleImages().map((image, index) => (
              <div
                key={`${image.src}-${currentIndex}-${index}`}
                className={`relative transition-all duration-1000 ease-in-out ${
                  index === 1 
                    ? 'scale-110 z-20 opacity-100' 
                    : 'scale-90 z-10 opacity-70'
                }`}
                style={{
                  transform: `translateX(${(index - 1) * 100}px) scale(${index === 1 ? 1.1 : 0.9})`,
                }}
              >
                <div className="relative overflow-hidden rounded-2xl romantic-shadow group">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-80 h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-lg font-romantic text-center">
                      {image.caption}
                    </p>
                  </div>
                  
                  {/* Floating hearts on hover */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute text-2xl opacity-0 group-hover:opacity-100 group-hover:animate-float"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${20 + i * 20}%`,
                          animationDelay: `${i * 0.2}s`,
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
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-primary/30 hover:bg-primary/60'
                }`}
              />
            ))}
          </div>

          {/* Side decorative elements */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-6xl text-primary/20 animate-float">
            🌸
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-6xl text-primary/20 animate-float" style={{ animationDelay: '1s' }}>
            🌸
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-12 max-w-md mx-auto">
          <div className="w-full bg-primary/20 rounded-full h-2">
            <div 
              className="bg-gradient-sunset h-2 rounded-full transition-all duration-4000 ease-linear"
              style={{ 
                width: `${((currentIndex + 1) / images.length) * 100}%`,
              }}
            />
          </div>
          <p className="text-center mt-3 text-sm font-romantic text-muted-foreground">
            {currentIndex + 1} of {images.length} precious memories
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