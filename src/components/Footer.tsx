import { Phone, Mail, MapPin, Youtube, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import logoImg from "@/assets/logo.jpg";

const Footer = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="Logo" className="h-10 object-contain" />
              <h3 className="font-display font-bold text-lg">Star Lions Matriculation Hr. Sec. School</h3>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              No.9, Agraharam, Ayyampettai, Tamil Nadu 614201
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:04374242299" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4" /> 04374 - 242299
              </a>
              <a href="tel:+917639779434" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4" /> +91 76397 79434
              </a>
              <a href="mailto:officeslmhss@gmail.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4" /> officeslmhss@gmail.com
              </a>
              <a href="https://goo.gl/maps/97TCJuWCNawcuMZQ7" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <MapPin className="h-4 w-4" /> View on Google Maps
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <button onClick={() => scrollTo("#home")} className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">Home</button>
              <button onClick={() => scrollTo("#about")} className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">About</button>
              <button onClick={() => scrollTo("#facilities")} className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">Facilities</button>
              <Link to="/gallery" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">Gallery</Link>
              <button onClick={() => scrollTo("#contact")} className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">Contact</button>
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Follow Us</h4>
            <div className="space-y-3 text-sm">
              <a 
                href="https://youtube.com/@starlionsschool?si=-xlfaFmm6DANnGeR" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Youtube className="h-5 w-5" /> YouTube
              </a>
              <a 
                href="https://www.instagram.com/starlionsschool?igsh=MTVvd2ljZ3JqOHp3ZQ==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" /> Instagram
              </a>
              <a 
                href="https://www.facebook.com/share/1BUfb8oUZ2/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" /> Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-primary-foreground/50 text-xs">
            © {new Date().getFullYear()} Star Lions Matriculation Hr. Sec. School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
