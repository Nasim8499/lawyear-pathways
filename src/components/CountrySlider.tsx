import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import au from "@/assets/country-australia.jpg";
import nz from "@/assets/country-newzealand.jpg";
import sg from "@/assets/country-singapore.jpg";
import eu from "@/assets/country-schengen.jpg";

const slides = [
  { country: "Australia", code: "AU", tagline: "Skilled migration & partner visas", image: au, tint: "from-[#0a2540] to-[#061827]", accent: "#FFD66B" },
  { country: "Singapore", code: "SG", tagline: "Employment Pass & PR pathways", image: sg, tint: "from-[#2a0d0d] to-[#140505]", accent: "#E8A87C" },
  { country: "Schengen", code: "EU", tagline: "Long-stay & family reunification", image: eu, tint: "from-[#0f0a2a] to-[#070414]", accent: "#C9A84C" },
];

export const CountrySlider = () => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSel = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSel);
    const id = setInterval(() => embla.scrollNext(), 4500);
    return () => { clearInterval(id); embla.off("select", onSel); };
  }, [embla]);

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between px-1 mb-2">
        <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Featured jurisdictions</p>
        <p className="text-[10px] text-gold font-semibold">{selected + 1}/{slides.length}</p>
      </div>
      <div className="overflow-hidden rounded-[28px]" ref={emblaRef}>
        <div className="flex">
          {slides.map((s) => (
            <div key={s.code} className="min-w-0 shrink-0 grow-0 basis-full pr-2">
              <Link to="/countries" className={`relative block h-44 rounded-[28px] overflow-hidden border border-gold/30 shadow-card bg-gradient-to-br ${s.tint}`}>
                <img src={s.image} alt={s.country} loading="lazy" width={1024} height={768}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"/>
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent"/>
                <div className="absolute top-3 left-4 flex items-center gap-2">
                  <span className="text-[10px] tracking-[0.3em] font-bold" style={{ color: s.accent }}>{s.code}</span>
                  <span className="w-8 h-px" style={{ background: s.accent }}/>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="font-display text-2xl text-foreground leading-tight">{s.country}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5 max-w-[200px]">{s.tagline}</p>
                  </div>
                  <span className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: s.accent, color: "#0d0d0d" }}>
                    <ArrowRight size={16}/>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-1.5 mt-3">
        {slides.map((s, i) => (
          <button key={s.code} onClick={() => embla?.scrollTo(i)}
            className={`h-1 rounded-full transition-all ${selected === i ? "w-6" : "w-1.5 bg-border"}`}
            style={selected === i ? { background: s.accent } : undefined}/>
        ))}
      </div>
    </div>
  );
};