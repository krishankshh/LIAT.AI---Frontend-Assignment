import React, { useState, useMemo, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  ChevronRight, 
  Layers, 
  Store, 
  Utensils, 
  Gamepad2, 
  Star,
  Info,
  Navigation,
  ArrowRight
} from 'lucide-react';
import { moaData } from './data';
import MallScrollExperience from './components/MallScrollExperience';
import { NarrativeSlideProps } from './types';

// --- Sub-components ---

const DirectoryHeader: React.FC = () => (
  <header className="h-[70px] bg-moa-navy text-white flex items-center px-8 justify-between z-[1000]">
    <div className="flex items-center gap-6">
      <div className="font-serif font-bold text-2xl tracking-tighter">
        MALL OF <span className="text-moa-yellow">AMERICA</span>
      </div>
      <div className="h-6 w-px bg-white/20 mx-2" />
      <div className="flex gap-4 text-[10px] uppercase tracking-widest font-bold text-white/60">
        <span className="text-white">Directory</span>
        <span>Parking</span>
        <span>Events</span>
      </div>
    </div>
    <div className="flex items-center gap-6">
      <button className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-xs font-bold hover:bg-white/20 transition-all text-white">
        <Star size={14} className="text-moa-yellow" />
        Favorites
      </button>
      <button className="px-5 py-2 bg-moa-yellow text-moa-navy rounded-lg text-xs font-black uppercase tracking-wider hover:bg-white transition-all">
        Leasing Portal
      </button>
    </div>
  </header>
);

const NarrativeSlide: React.FC<NarrativeSlideProps> = ({ progress, range, children, align = "center" }) => {
  const opacity = useTransform(progress, range, [0, 1, 1, 0]);
  const y = useTransform(progress, range, [40, 0, 0, -40]);

  const alignmentClasses = {
    center: "items-center text-center",
    left: "items-start text-left pl-12 md:pl-24",
    right: "items-end text-right pr-12 md:pr-24"
  };

  return (
    <motion.div 
      style={{ opacity, y }}
      className={`absolute inset-0 flex flex-col justify-center pointer-events-none z-20 ${alignmentClasses[align]}`}
    >
      <div className="max-w-4xl px-6">
        {children}
      </div>
    </motion.div>
  );
};

// --- Sub-components ---

const VideoSection: React.FC<{ setView: (view: 'landing' | 'directory') => void }> = ({ setView }) => {
  const [isZooming, setIsZooming] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const videoY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const handleEnter = () => {
    setIsZooming(true);
    setTimeout(() => {
      setView('directory');
    }, 1000);
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="relative h-screen w-full bg-moa-bg overflow-hidden flex items-center justify-center z-50 shadow-[0_-100px_100px_rgba(0,0,0,0.9)]"
    >
      {/* Video Background with Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y: videoY }} className="absolute -inset-y-[20%] inset-x-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src="/droneshot.mp4" type="video/mp4" />
          </video>
        </motion.div>
        
        {/* Cinematic Vignette & Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,14,23,0.8)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-moa-bg via-transparent to-moa-bg/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col items-center justify-center h-full text-center">
        <motion.div
          style={{ y: contentY }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <span className="text-moa-yellow font-sans text-[10px] uppercase tracking-[0.6em] font-black mb-6 block">
            The Hub of Possibility
          </span>
          <h2 className="font-serif text-6xl md:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.85] uppercase">
            Experience <br /><span className="text-moa-yellow">The Horizon.</span>
          </h2>
          <p className="font-sans text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light mb-16">
            Witness the architectural scale of North America's largest retail and entertainment complex. A journey that evolves at every turn.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-20">
            {[
              { label: 'Retail', value: '520+', sub: 'Brands' },
              { label: 'Attractions', value: '25+', sub: 'Experiences' },
              { label: 'Dining', value: '60+', sub: 'Locations' }
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="bg-white/5 backdrop-blur-md border border-white/10 px-8 py-6 rounded-2xl min-w-[160px]"
              >
                <div className="text-moa-yellow font-serif text-3xl font-black">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.button 
            onClick={handleEnter}
            animate={isZooming ? { scale: 100, borderRadius: 0 } : { scale: 1 }}
            transition={{ duration: 1.2, ease: [0.645, 0.045, 0.355, 1] }}
            whileHover={!isZooming ? { scale: 1.05 } : {}}
            whileTap={!isZooming ? { scale: 0.95 } : {}}
            className="group pointer-events-auto relative flex items-center gap-8 bg-white text-moa-bg px-14 py-7 rounded-full font-sans font-black uppercase tracking-[0.2em] text-xs shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:bg-moa-yellow z-[1000] overflow-hidden"
          >
            <motion.div 
              animate={isZooming ? { opacity: 0 } : { opacity: 1 }}
              className="flex items-center gap-8"
            >
              Enter the Directory
              <div className="w-8 h-8 rounded-full bg-moa-bg flex items-center justify-center text-white group-hover:bg-black transition-colors">
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

// --- Main App ---

export default function App() {
  const [view, setView] = useState<'landing' | 'directory'>('landing');
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Directory State
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeLevel, setActiveLevel] = useState(1);

  const filteredStores = useMemo(() => {
    return moaData.directory.filter(store => {
      const matchesSearch = store.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          store.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || store.category === activeCategory;
      const matchesLevel = store.level === activeLevel;
      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchTerm, activeCategory, activeLevel]);

  if (view === 'directory') {
    return (
      <div className="h-screen flex flex-col bg-moa-bg overflow-hidden">
        <DirectoryHeader />
        <main className="flex-1 flex overflow-hidden">
          <aside className="w-[380px] bg-white border-r border-gray-200 flex flex-col z-[100] shadow-xl">
            <div className="p-6 border-b border-gray-200">
              <div className="relative flex items-center">
                <Search className="absolute left-3 text-gray-400" size={18} />
                <input 
                  type="text" 
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-100 rounded-xl focus:border-moa-navy focus:outline-none text-moa-navy font-medium transition-all" 
                  placeholder="Search stores, dining..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
              {filteredStores.map(store => (
                <div key={store.id} className="p-5 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors group">
                  <div className="text-moa-navy font-bold text-lg group-hover:text-black">{store.name}</div>
                  <div className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">{store.category}</div>
                  <div className="mt-2 flex items-center gap-2 text-moa-navy font-medium text-sm">
                    <MapPin size={12} />
                    Level {store.level} • {store.corridor} Wing
                  </div>
                </div>
              ))}
            </div>
          </aside>
          
          <div className="flex-1 bg-[#eef0f2] flex items-center justify-center relative p-12">
             <div className="w-full h-full bg-white rounded-3xl shadow-2xl flex items-center justify-center border-4 border-moa-navy/5">
                <div className="text-moa-navy text-4xl font-serif font-black opacity-20 uppercase tracking-tighter">
                  MAP_ENGINE_V1.1
                </div>
             </div>
             
             <button 
                onClick={() => setView('landing')}
                className="absolute bottom-10 right-10 px-8 py-4 bg-moa-navy text-white rounded-full flex items-center gap-3 shadow-2xl hover:scale-105 hover:bg-black transition-all active:scale-95 group font-sans font-bold uppercase tracking-widest text-xs"
             >
               <ArrowRight className="rotate-180" size={16} />
               Return to Entry
             </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="relative bg-moa-bg w-full scrollbar-hide">
      <div ref={scrollContainerRef} className="relative z-10">
        <MallScrollExperience progress={smoothProgress}>
          <NarrativeSlide progress={smoothProgress} range={[0, 0, 0.05, 0.08]} align="center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }}>
              <h1 className="font-serif text-6xl md:text-9xl font-bold tracking-tighter text-white uppercase mb-4 leading-none text-shadow-xl">
                Not Just <br />A Mall.
              </h1>
              <p className="font-sans text-xl md:text-2xl text-white/60 tracking-widest font-light uppercase">
                A World Inside.
              </p>
              <div className="mt-12 flex justify-center">
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="flex flex-col items-center gap-4">
                  <div className="w-[1px] h-20 bg-gradient-to-b from-moa-yellow to-transparent" />
                  <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-black">Scroll</span>
                </motion.div>
              </div>
            </motion.div>
          </NarrativeSlide>

          <NarrativeSlide progress={smoothProgress} range={[0.15, 0.22, 0.35, 0.42]} align="left">
            <h2 className="font-serif text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-[0.9]">
              5.6 Million <br /><span className="text-moa-yellow">Square Feet.</span>
            </h2>
            <p className="font-sans text-lg md:text-xl text-white/60 max-w-lg leading-relaxed font-light">
              An architectural marvel. A city of luxury, light, and unlimited discovery.
            </p>
            <div className="mt-12 flex gap-12">
              <div>
                <div className="text-moa-yellow font-serif text-5xl font-black">520+</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mt-2">Global Retailers</div>
              </div>
              <div>
                <div className="text-moa-yellow font-serif text-5xl font-black">40M</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mt-2">Annual Visitors</div>
              </div>
            </div>
          </NarrativeSlide>

          <NarrativeSlide progress={smoothProgress} range={[0.48, 0.55, 0.65, 0.72]} align="right">
            <h2 className="font-serif text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-[0.9]">
              Luxury. <br />Experience. <br /><span className="text-white/40">Icons.</span>
            </h2>
            <p className="font-sans text-lg md:text-xl text-white/60 max-w-lg ml-auto leading-relaxed font-light">
              From world-class brands to global attractions, the journey evolves at every turn.
            </p>
          </NarrativeSlide>

          <NarrativeSlide progress={smoothProgress} range={[0.78, 0.85, 0.9, 0.98]} align="center">
            <motion.div className="flex flex-col items-center">
              <h2 className="font-serif text-5xl md:text-9xl font-bold tracking-tighter text-white mb-6 leading-none uppercase">
                Step Into <br /><span className="text-moa-yellow">The Scale.</span>
              </h2>
              <p className="font-sans text-xl text-white/40 tracking-[0.3em] uppercase font-light">
                Keep Scrolling to Explore
              </p>
            </motion.div>
          </NarrativeSlide>
        </MallScrollExperience>
      </div>

      <div className="relative z-50 mt-[-100vh]">
        <VideoSection setView={setView} />
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-moa-yellow z-[2000] origin-left shadow-[0_0_15px_rgba(253,213,0,0.5)]" style={{ scaleX: scrollYProgress }} />
    </div>
  );
}
