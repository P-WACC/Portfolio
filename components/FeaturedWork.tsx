"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export const projects = [
  {
    id: 1,
    client: "PROJECT 01",
    title: "Fx Charater Skill",
    color: "#111111",
    textColor: "#ffffff",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1600",
    engine: "Unreal Engine"
  },
  {
    id: 2,
    client: "PROJECT 02",
    title: "Cutscene FX",
    color: "#EAE7E1",
    textColor: "#0A0A0A",
    image: "/Portfolio/DantaliaCutscene.mp4",
    cutsceneData: {
      number: "03.1",
      title: "Cinematic cutscenes",
      description: "Integrating character and camera animations into Timeline, then building the scene around them: from per-shot VFX to shader-based volume grading, all synchronized into a single cinematic sequence."
    }
  },
  {
    id: 3,
    client: "PROJECT 03",
    title: "Roblox FX",
    color: "#F5F3EF",
    textColor: "#0A0A0A",
    image: "/Portfolio/10_OpenTreasurebox.mp4",
    description: "Handling in-game FX for Roblox using ParticleEmitters to bring conceptual designs to life. Specialized in creating various stylized, real-time effects for both objects and environments.",
  },
  {
    id: 4,
    client: "PROJECT 04",
    title: "FX Showcases",
    color: "#222222",
    textColor: "#ffffff",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600",
    engine: "Unity",
    description: "Developing real-time effects in Unity using the built-in Particle System and VFX Graph. This showcase ranges from realistic shader development to dynamic particle generation, alongside foundational procedural content generation (PCG) tools built with C#.",
  },
  {
    id: 5,
    client: "PROJECT 05",
    title: "3rd Year Uni Project",
    color: "#ffffff",
    textColor: "#0A0A0A",
    engine: "Unreal Engine",
    year: "2024",
    showcases: [
      {
        image: "/Portfolio/Unreal Miniproject.mp4",
        description: "Developed a complete mini-game, designing and mapping every environment element showcased in the video. The level design was heavily polished, utilizing volumetric fog systems to establish a deeply immersive and realistic atmosphere."
      },
      {
        image: "/Portfolio/Trailer final.mp4",
        description: "Focused on real-time shader development, detailed game environment design, and dynamic lighting optimization within Unity.",
        engine: "Unity",
        year: "2025"
      }
    ]
  },
];

export const robloxCategories = [
  {
    id: "Object FX",
    count: 10,
    items: [
      { src: "/Portfolio/1_RedPortal.mp4", name: "Red Portal" },
      { src: "/Portfolio/2_BluePortal.mp4", name: "Blue Portal" },
      { src: "/Portfolio/3_CleanedFloor.mp4", name: "Cleaned Floor" },
      { src: "/Portfolio/4_Firework.mp4", name: "Firework" },
      { src: "/Portfolio/5_LanternGlow.mp4", name: "Lantern Glow" },
      { src: "/Portfolio/6_ShootingBuble.mp4", name: "Shooting Bubble" },
      { src: "/Portfolio/7_SmokedEngine.mp4", name: "Smoked Engine" },
      { src: "/Portfolio/8_Fountain.mp4", name: "Fountain" },
      { src: "/Portfolio/9_HalloweenSelectedPart.mp4", name: "Halloween Selected" },
      { src: "/Portfolio/10_OpenTreasurebox.mp4", name: "Open Treasurebox" }
    ]
  },
  {
    id: "Jetpack",
    count: 5,
    items: [
      { src: "/Portfolio/Jetpack/1_Jetpack.mp4", name: "Jetpack" },
      { src: "/Portfolio/Jetpack/2_BrokenJetpack.mp4", name: "Broken Jetpack" },
      { src: "/Portfolio/Jetpack/3_RichAuraJetpack.mp4", name: "Rich Aura Jetpack" },
      { src: "/Portfolio/Jetpack/4_OrangeAuraJetpack.mp4", name: "Orange Aura Jetpack" },
      { src: "/Portfolio/Jetpack/5_BlueAuraJectpack.mp4", name: "Blue Aura Jetpack" }
    ]
  },
  {
    id: "Environment",
    count: 5,
    items: [
      { src: "/Portfolio/Environment/1_Petals.mp4", name: "Petals" },
      { src: "/Portfolio/Environment/2_WaterTrails.mp4", name: "Water Trails" },
      { src: "/Portfolio/Environment/3_ConcertStage.mp4", name: "Concert Stage" },
      { src: "/Portfolio/Environment/4_HalloweenEnvironment.mp4", name: "Halloween Env" },
      { src: "/Portfolio/Environment/5_ChristmasEnvironment.mp4", name: "Christmas Env" }
    ]
  }
];

const fxShowcaseCategories = [
  {
    id: "Object FX",
    count: 18,
    items: [
      { src: "/Portfolio/FxShowcase/ObjectFX/RealisticWater.mp4", name: "Realistic Water" },
      { src: "/Portfolio/FxShowcase/ObjectFX/Smoke2.mp4", name: "Smoke" },
      { src: "/Portfolio/FxShowcase/ObjectFX/Hyperdrive.mp4", name: "Hyperdrive" },
      { src: "/Portfolio/FxShowcase/ObjectFX/Rain1.mp4", name: "Rain" },
      { src: "/Portfolio/FxShowcase/ObjectFX/Lightning2.mp4", name: "Lightning" },
      { src: "/Portfolio/FxShowcase/ObjectFX/LootDrop.mp4", name: "Loot Drop" },
      { src: "/Portfolio/FxShowcase/ObjectFX/Impact.mp4", name: "Impact" },
      { src: "/Portfolio/FxShowcase/ObjectFX/Implotion.mp4", name: "Implosion" },
      { src: "/Portfolio/FxShowcase/ObjectFX/Explotion.mp4", name: "Explosion" },
      { src: "/Portfolio/FxShowcase/ObjectFX/Projectile.mp4", name: "Projectile" },
      { src: "/Portfolio/FxShowcase/ObjectFX/FlameThrower.mp4", name: "Flame Thrower" },
      { src: "/Portfolio/FxShowcase/ObjectFX/Heal1.mp4", name: "Heal" },
      { src: "/Portfolio/FxShowcase/ObjectFX/Hurt1.mp4", name: "Hurt" },
      { src: "/Portfolio/FxShowcase/ObjectFX/ShockWave.mp4", name: "Shock Wave" },
      { src: "/Portfolio/FxShowcase/ObjectFX/Tornado.mp4", name: "Tornado" },
      { src: "/Portfolio/FxShowcase/ObjectFX/PointCache1.mp4", name: "Point Cache" },
      { src: "/Portfolio/FxShowcase/ObjectFX/SDF1.mp4", name: "SDF" },
      { src: "/Portfolio/FxShowcase/ObjectFX/Electric.mp4", name: "Electric" }
    ]
  },
  {
    id: "PCG Coding",
    items: [
      { src: "/Portfolio/FxShowcase/PCG.png", name: "PCG Using C# Script" }
    ]
  }
];

function PlayOnScrollVideo({ src, className }: { src: string, className: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      videoRef.current?.play().catch(() => {});
    } else {
      videoRef.current?.pause();
    }
  }, [isInView]);

  return (
    <video 
      ref={videoRef}
      src={src} 
      loop 
      muted 
      controls 
      playsInline 
      className={className} 
    />
  );
}

function ProjectSection({ project, setActiveImage }: { project: any, setActiveImage: any }) {
  const [activeCategory, setActiveCategory] = useState("Object FX");

  if (project.title === "Cutscene FX") {
    return (
      <section id={`project-${project.id}`} className="w-full bg-[#0A0A0A] border-b border-[#333] pt-24 pb-24">
        <div className="w-full px-6 md:px-12 mb-12">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white">{project.title}</h2>
        </div>
        <div className="w-full px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 relative">
              <div className="aspect-video w-full overflow-hidden relative">
                {project.image?.endsWith('.mp4') ? (
                  <PlayOnScrollVideo src={project.image} className="w-full h-full object-cover" />
                ) : (
                  <img src={project.image} alt="Case study" className="w-full h-full object-cover" />
                )}
              </div>
            </div>
            <div className="lg:col-span-4 pb-4">
               <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">{project.cutsceneData?.title}</h3>
               <p className="text-[#a0a0a0] leading-relaxed text-sm md:text-base">
                 {project.cutsceneData?.description}
               </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={`project-${project.id}`} className="w-full bg-[#0A0A0A] border-b border-[#333] pt-24">
      <div className="w-full px-6 md:px-12 mb-12">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white">{project.title}</h2>
      </div>
      <div className="flex-1 px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          
          {/* FX SHOWCASES LAYOUT */}
          {project.title === "FX Showcases" && (
            <>
              <div className="mb-24 w-screen relative left-1/2 -translate-x-1/2 px-6 md:px-12">
                <h3 className="text-sm uppercase tracking-widest font-semibold text-[#8E8E8E] mb-8">Asset Gallery</h3>
                <div className="flex justify-center border-b border-[#333] mb-12 overflow-x-auto overflow-y-hidden no-scrollbar">
                  {fxShowcaseCategories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`relative px-6 py-4 flex items-center gap-2 text-lg transition-colors whitespace-nowrap ${
                        activeCategory === cat.id
                          ? "border-t-2 border-t-[#EBA036] border-l border-r border-[#333] border-b border-b-[#0A0A0A] -mb-[1px] bg-[#0A0A0A] text-white font-bold z-10"
                          : "border-t-2 border-transparent border-l border-transparent border-r border-transparent border-b border-transparent text-[#8E8E8E] hover:text-white font-medium"
                      }`}
                    >
                      {cat.id} <span className="text-sm font-normal text-[#8E8E8E]">{cat.items.length}</span>
                    </button>
                  ))}
                </div>

                <div className={
                  fxShowcaseCategories.find(c => c.id === activeCategory)?.items.length === 1 
                    ? "flex justify-center w-full" 
                    : "grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-12"
                }>
                  {fxShowcaseCategories.find(c => c.id === activeCategory)?.items.map((img, i) => (
                    <div key={i} className={`flex flex-col gap-3 group ${fxShowcaseCategories.find(c => c.id === activeCategory)?.items.length === 1 ? 'w-full max-w-3xl' : 'w-full'}`}>
                      <div 
                        className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#1A1A1A] cursor-zoom-in"
                        onClick={() => setActiveImage(img.src)}
                      >
                        {img.src.endsWith('.mp4') ? (
                          <video src={img.src} autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        ) : (
                          <img src={img.src} alt={img.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        )}
                      </div>
                      <span className="text-sm font-semibold tracking-wide text-[#EAE7E1] px-1 text-center">{img.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-8 text-center text-lg mb-24 max-w-3xl mx-auto px-6">
                 <div className="text-xl leading-relaxed text-[#d1cfc9] font-medium">
                    {project.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                 </div>
                 <div className="flex gap-12 text-sm justify-center">
                    <div>
                      <strong className="block text-[#8E8E8E] uppercase tracking-widest mb-1">Engine</strong>
                      <span className="font-medium text-white">{project.engine || "Roblox Studio"}</span>
                    </div>
                    <div>
                      <strong className="block text-[#8E8E8E] uppercase tracking-widest mb-1">Year</strong>
                      <span className="font-medium text-white">{project.year || "2026"}</span>
                    </div>
                 </div>
              </div>
            </>
          )}

          {/* ROBLOX FX LAYOUT */}
          {project.title === "Roblox FX" && (
            <>
              <div className="w-full rounded-2xl overflow-hidden mb-12 grid grid-cols-5 grid-rows-3 gap-1 md:gap-2 bg-[#0A0A0A] p-1 md:p-2">
                {robloxCategories.flatMap(c => c.items).slice(0, 15).map((img, i) => (
                  <div 
                    key={i} 
                    className="relative w-full aspect-square cursor-zoom-in"
                    onClick={() => setActiveImage(img.src)}
                  >
                    <video 
                      src={img.src} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover rounded-md md:rounded-lg" 
                    />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-lg mb-24">
                 <div className="md:col-span-2 text-xl leading-relaxed text-[#d1cfc9] font-medium">
                    {project.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                 </div>
                 <div className="flex flex-col gap-6 text-sm">
                    <div>
                      <strong className="block text-[#8E8E8E] uppercase tracking-widest mb-1">Engine</strong>
                      <span className="font-medium text-white">{project.engine || "Roblox Studio"}</span>
                    </div>
                    <div>
                      <strong className="block text-[#8E8E8E] uppercase tracking-widest mb-1">Year</strong>
                      <span className="font-medium text-white">{project.year || "2026"}</span>
                    </div>
                 </div>
              </div>
            </>
          )}

          {/* FX CHARATER SKILL LAYOUT */}
          {project.title === "Fx Charater Skill" && (
            <div className="w-screen relative left-1/2 -translate-x-1/2 px-6 md:px-12 lg:px-24 xl:px-32 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 mt-8 mb-12">
              <div className="flex flex-col gap-8 order-2 lg:order-1 lg:pr-12">
                 <div className="text-xl leading-relaxed text-[#d1cfc9] font-medium max-w-lg">
                    {project.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                 </div>
                 <div className="flex gap-12 text-sm">
                    <div>
                      <strong className="block text-[#8E8E8E] uppercase tracking-widest mb-1">Engine</strong>
                      <span className="font-medium text-white">{project.engine || "Roblox Studio"}</span>
                    </div>
                    <div>
                      <strong className="block text-[#8E8E8E] uppercase tracking-widest mb-1">Year</strong>
                      <span className="font-medium text-white">{project.year || "2026"}</span>
                    </div>
                 </div>
              </div>
              <div className="order-1 lg:order-2 w-full aspect-video md:aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                 {project.image?.endsWith('.mp4') ? (
                   <video src={project.image} autoPlay loop muted controls playsInline className="absolute inset-0 w-full h-full object-cover" />
                 ) : (
                   <img src={project.image} alt="Case study" className="absolute inset-0 w-full h-full object-cover" />
                 )}
              </div>
            </div>
          )}

          {/* OTHER PROJECTS (STATIC HERO / YOUTUBE) */}
          {project.title !== "Roblox FX" && project.title !== "FX Showcases" && project.title !== "Fx Charater Skill" && (
            <div className="flex flex-col gap-24">
              {(project.showcases || [{ image: project.image, youtubeId: project.youtubeId, description: project.description }]).map((showcase: any, idx: number) => (
                <div key={idx} className="w-full">
                  <div className="aspect-video w-full rounded-2xl overflow-hidden mb-12">
                     {showcase.youtubeId ? (
                       <iframe 
                         src={`https://www.youtube.com/embed/${showcase.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${showcase.youtubeId}&controls=0`} 
                         title="YouTube video player" 
                         frameBorder="0" 
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                         referrerPolicy="strict-origin-when-cross-origin" 
                         allowFullScreen
                         className="w-full h-full"
                       ></iframe>
                     ) : showcase.image?.endsWith('.mp4') ? (
                       <video src={showcase.image} autoPlay loop muted controls playsInline className="w-full h-full object-cover" />
                     ) : (
                       <img src={showcase.image} alt="Case study" className="w-full h-full object-cover" />
                     )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-lg">
                     <div className="md:col-span-2 text-xl leading-relaxed text-[#d1cfc9] font-medium">
                        {showcase.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                     </div>
                     <div className="flex flex-col gap-6 text-sm">
                        <div>
                          <strong className="block text-[#8E8E8E] uppercase tracking-widest mb-1">Engine</strong>
                          <span className="font-medium text-white">{showcase.engine || project.engine || "Roblox Studio"}</span>
                        </div>
                        <div>
                          <strong className="block text-[#8E8E8E] uppercase tracking-widest mb-1">Year</strong>
                          <span className="font-medium text-white">{showcase.year || project.year || "2026"}</span>
                        </div>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ROBLOX FX ASSET Gallery (At Bottom) */}
          {project.title === "Roblox FX" && (
            <div className="mt-24 pb-12 w-screen relative left-1/2 -translate-x-1/2 px-6 md:px-12">
              <h3 className="text-sm uppercase tracking-widest font-semibold text-[#8E8E8E] mb-8">Asset Gallery</h3>
              <div className="flex border-b border-[#333] mb-12 overflow-x-auto overflow-y-hidden no-scrollbar">
                {robloxCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`relative px-6 py-4 flex items-center gap-2 text-lg transition-colors whitespace-nowrap ${
                      activeCategory === cat.id
                        ? "border-t-2 border-t-[#EBA036] border-l border-r border-[#333] border-b border-b-[#0A0A0A] -mb-[1px] bg-[#0A0A0A] text-white font-bold z-10"
                        : "border-t-2 border-transparent border-l border-transparent border-r border-transparent border-b border-transparent text-[#8E8E8E] hover:text-white font-medium"
                    }`}
                  >
                    {cat.id} <span className="text-sm font-normal text-[#8E8E8E]">{cat.items.length}</span>
                  </button>
                ))}
              </div>

              <div className={
                robloxCategories.find(c => c.id === activeCategory)?.items.length === 1 
                  ? "flex justify-center w-full" 
                  : "grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-12"
              }>
                {robloxCategories.find(c => c.id === activeCategory)?.items.map((img, i) => (
                  <div key={i} className={`flex flex-col gap-3 group ${robloxCategories.find(c => c.id === activeCategory)?.items.length === 1 ? 'w-full max-w-3xl' : 'w-full'}`}>
                    <div 
                      className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#1A1A1A] cursor-zoom-in"
                      onClick={() => setActiveImage(img.src)}
                    >
                      {img.src.endsWith('.mp4') ? (
                        <video src={img.src} autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      ) : (
                        <img src={img.src} alt={img.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      )}
                    </div>
                    <span className="text-sm font-semibold tracking-wide text-[#EAE7E1] px-1 text-center">{img.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function FeaturedWork() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      <div id="project">
        {projects.map((project) => (
          <ProjectSection 
            key={project.id} 
            project={project} 
            setActiveImage={setActiveImage} 
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          >
            {activeImage.endsWith('.mp4') ? (
              <motion.video
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={activeImage}
                autoPlay
                loop
                muted
                playsInline
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            ) : (
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={activeImage}
                alt="Fullscreen preview"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
