import React, { useEffect, useRef, useState } from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';

const TOTAL_FRAMES = 120;

interface MallScrollExperienceProps {
  progress: MotionValue<number>;
  children?: React.ReactNode;
  onLoadingComplete?: () => void;
}

const MallScrollExperience: React.FC<MallScrollExperienceProps> = ({ progress, children, onLoadingComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Map progress to frame index
  const frameIndex = useTransform(progress, [0, 1], [1, TOTAL_FRAMES]);

  // Preloading Logic
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    const preloadImages = async () => {
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        const frameNumber = i.toString().padStart(4, '0');
        img.src = `/frames/mall_${frameNumber}.jpg`;

        await new Promise<void>((resolve) => {
          img.onload = () => {
            loadedCount++;
            setLoadingProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
            loadedImages[i - 1] = img;
            resolve();
          };
          img.onerror = () => {
            console.error(`Failed to load frame ${frameNumber}`);
            loadedCount++;
            resolve();
          };
        });
      }
      setImages(loadedImages);
      setIsLoaded(true);
      if (onLoadingComplete) onLoadingComplete();
    };

    preloadImages();
  }, [onLoadingComplete]);

  // Rendering Logic
  useEffect(() => {
    if (!isLoaded || images.length === 0) return;

    let animationId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d', { alpha: false });
    if (!context) return;

    const render = () => {
      const currentFrame = Math.floor(frameIndex.get());
      const image = images[currentFrame - 1];

      if (image && context) {
        const devicePixelRatio = window.devicePixelRatio || 1;
        const width = window.innerWidth;
        const height = window.innerHeight;

        canvas.width = width * devicePixelRatio;
        canvas.height = height * devicePixelRatio;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        context.scale(devicePixelRatio, devicePixelRatio);
        context.clearRect(0, 0, width, height);

        const imgRatio = image.width / image.height;
        const canvasRatio = width / height;

        let drawWidth, drawHeight, x, y;

        if (imgRatio > canvasRatio) {
          drawHeight = height;
          drawWidth = height * imgRatio;
          x = (width - drawWidth) / 2;
          y = 0;
        } else {
          drawWidth = width;
          drawHeight = width / imgRatio;
          x = 0;
          y = (height - drawHeight) / 2;
        }

        context.drawImage(image, x, y, drawWidth, drawHeight);
      }
      animationId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationId);
  }, [isLoaded, images, frameIndex]);

  return (
    <div className="relative h-[800vh] bg-moa-bg">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="block h-full w-full object-cover"
        />

        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-0" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

        <div className="absolute inset-0 pointer-events-none">
          {children}
        </div>

        {!isLoaded && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-moa-bg">
            <div className="mb-8 font-serif text-3xl font-bold tracking-tighter text-white uppercase">
              MALL OF <span className="text-moa-yellow">AMERICA</span>
            </div>
            <div className="h-[2px] w-48 bg-white/10 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-moa-yellow"
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
              />
            </div>
            <div className="mt-4 font-sans text-[10px] uppercase tracking-[0.2em] text-white/40">
              Initializing Experience {loadingProgress}%
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MallScrollExperience;
