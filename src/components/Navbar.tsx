import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home", route: "/" },
  { label: "History", href: "#history", route: "/" },
  { label: "Vision", href: "#vision-mission", route: "/" },
  { label: "About", href: "#about", route: "/" },
  { label: "Facilities", href: "#facilities", route: "/" },
  { label: "Academics", href: "#academics", route: "/" },
  { label: "Events", href: "#events", route: "/" },
  { label: "Gallery", href: "/gallery", route: "/gallery" },
  { label: "Contact", href: "#contact", route: "/" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") return;
    const sections = navLinks.filter((l) => l.href.startsWith("#")).map((l) => l.href.slice(1));
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop - 150 <= scrollY) {
          setActiveSection(`#${sections[i]}`);
          return;
        }
      }
      setActiveSection("#home");
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNav = (link: typeof navLinks[0]) => {
    setMobileMenuOpen(false);
    if (link.route === "/gallery") return; // handled by Link
    if (location.pathname !== "/") {
      window.location.href = "/" + link.href;
      return;
    }
    const el = document.querySelector(link.href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-foreground/10 shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-20 md:h-24 px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoImg} alt="Star Lions School Logo" className="h-14 md:h-20 object-contain" />
          {/* <span className="text-foreground font-display font-bold text-lg hidden sm:block">Star Lions</span> */}
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) =>
            l.route === "/gallery" ? (
              <Link
                key={l.href}
                to="/gallery"
                className="px-3 py-2 rounded-lg text-foreground/70 hover:text-primary hover:bg-primary/10 text-sm font-medium transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <button
                key={l.href}
                onClick={() => handleNav(l)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === l.href
                    ? "text-primary bg-primary/15 font-semibold"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/10"
                }`}
              >
                {l.label}
              </button>
            )
          )}
        </div>
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-foreground/10 pb-4">
          {navLinks.map((l) =>
            l.route === "/gallery" ? (
              <Link
                key={l.href}
                to="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left px-6 py-3 text-sm font-medium transition-colors ${
                  location.pathname === "/gallery" ? "text-primary bg-primary/15" : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {l.label}
              </Link>
            ) : (
              <button
                key={l.href}
                onClick={() => handleNav(l)}
                className={`block w-full text-left px-6 py-3 text-sm font-medium transition-colors ${
                  activeSection === l.href ? "text-primary bg-primary/15" : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {l.label}
              </button>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
