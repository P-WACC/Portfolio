import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#0A0A0A] text-white border-t border-[#1a1a1a] py-12 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-[#8E8E8E] font-semibold mb-6">Get in touch</h4>
            <h3 className="text-2xl font-bold tracking-[0.2em] mb-4">WACHIRAWIT SAKSAEN</h3>
            <a 
              href="mailto:vcpj01@gmail.com"
              className="text-xl font-medium border-b border-[#333] hover:border-white transition-colors pb-1 inline-block mt-4 cursor-pointer"
            >
              vcpj01@gmail.com
            </a>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#8E8E8E] font-semibold mb-6">Directory</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li><Link href="#project-1" className="hover:text-[#8E8E8E] transition-colors">Fx Charater Skill</Link></li>
              <li><Link href="#project-2" className="hover:text-[#8E8E8E] transition-colors">Cutscene FX</Link></li>
              <li><Link href="#project-3" className="hover:text-[#8E8E8E] transition-colors">Roblox FX</Link></li>
              <li><Link href="#project-4" className="hover:text-[#8E8E8E] transition-colors">FX Showcases</Link></li>
              <li><Link href="#project-5" className="hover:text-[#8E8E8E] transition-colors">3rd Year Uni Project</Link></li>
              <li><Link href="#experience" className="hover:text-[#8E8E8E] transition-colors mt-4">EXPERIENCE</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#8E8E8E] font-semibold mb-6">Socials</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li><a href="https://www.linkedin.com/in/wachirawit-saksaen-04850b3b4/" target="_blank" rel="noopener noreferrer" className="hover:text-[#8E8E8E] transition-colors">LinkedIn</a></li>
              <li><a href="https://www.facebook.com/wachirawit.saksaen" target="_blank" rel="noopener noreferrer" className="hover:text-[#8E8E8E] transition-colors">Facebook</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
