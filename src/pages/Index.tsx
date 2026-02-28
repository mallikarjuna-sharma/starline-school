import { useState, useEffect, useCallback } from "react";
import { GraduationCap, Building, FlaskConical, Heart, Shield, Bus, Monitor, Users, Eye, Dumbbell, Music, BookOpen, Baby, ChevronLeft, ChevronRight, MapPin, Music2, Footprints, Move, Gamepad2, LayoutGrid, Swords, Trophy, Piano, Flower2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logoImg from "@/assets/logo.png";
// Replace chairman.jpg and secretary.jpg in src/assets/ with new photos when ready
import chairmanImg from "@/assets/chairman.jpg";
import secretaryImg from "@/assets/secretary.jpg";

// Import gallery images for hero carousel (selecting first 10)
const galleryImages = import.meta.glob("../assets/gallery-*.jpg", { eager: true, import: "default" }) as Record<string, string>;

// Get first 10 gallery images sorted by number
const heroSlides = Object.entries(galleryImages)
  .sort((a, b) => {
    const numA = parseInt(a[0].match(/gallery-(\d+)/)?.[1] || "0");
    const numB = parseInt(b[0].match(/gallery-(\d+)/)?.[1] || "0");
    return numA - numB;
  })
  .slice(0, 10)
  .map(([, src]) => src as string);

const salientAspects = [
  { icon: Heart, text: "Healthy and Hygienic Environment", color: "text-rose-500" },
  { icon: Baby, text: "Education with a Mother's Touch", color: "text-pink-500" },
  { icon: GraduationCap, text: "Highly Qualified, Experienced and Dedicated Faculty", color: "text-amber-500" },
  { icon: Monitor, text: "Smart Class Facility & AC Classrooms for Pre-KG", color: "text-blue-500" },
  { icon: BookOpen, text: "Age-appropriate Education for Every Student", color: "text-emerald-500" },
  { icon: Users, text: "Continuous Assessment & Parent Reporting", color: "text-violet-500" },
  { icon: Dumbbell, text: "Well Developed Sports Facility", color: "text-orange-500" },
  { icon: Music, text: "Co-curricular: Karate, Yoga, Music, Dance, Art & Craft", color: "text-fuchsia-500" },
  { icon: Eye, text: "Personal Care with CCTV Surveillance", color: "text-cyan-500" },
  { icon: Bus, text: "Van Facility for All Destinations at Low Cost", color: "text-teal-500" },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [vanImageLoaded, setVanImageLoaded] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, []);


  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />

      {/* Admissions Open Banner */}
      <div className="bg-primary text-primary-foreground py-3 text-center mt-20 md:mt-24">
        <p className="font-display font-bold text-lg md:text-xl">
          Admissions Open for 2026 - 2027
        </p>
        <p className="text-sm text-primary-foreground/90 mt-1">Enroll now for the new academic year</p>
      </div>

      {/* HERO CAROUSEL - Full Screen Width */}
      <section id="home" className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 w-full">
          {heroSlides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
            >
              <img
                src={slide}
                alt={`School Event ${i + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}

          {/* Carousel controls */}
          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition">
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2.5 rounded-full transition-all ${i === currentSlide ? "w-8 bg-secondary" : "w-2.5 bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="history" className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-primary mb-4">About Us</h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-12 rounded-full" />
          <div className="max-w-4xl mx-auto">
            <p className="text-muted-foreground text-center leading-relaxed mb-4">
              Founded 50 years ago, SLMHSS has been a beacon of learning and empowerment in the heart of Ayyampettai Thanjavur(DT), Tamil Nadu. Established with the vision to bring quality education to rural children, our school has grown from humble beginnings into a trusted institution where tradition meets excellence.
            </p>
            <p className="text-muted-foreground text-center leading-relaxed mb-4">
              Over the past five decades, we have remained committed to nurturing young minds, fostering curiosity, and promoting holistic development. Our curriculum follows the Matriculation Board guidelines, emphasizing strong academic foundations while also encouraging extracurricular engagement in sports, arts, and cultural activities.
            </p>
            <p className="text-muted-foreground text-center leading-relaxed mb-4">
              At SLMHSS, we believe that education goes beyond textbooks. Our dedicated faculty works tirelessly to instill values such as integrity, discipline, empathy, and respect. We strive to create a supportive and inclusive environment where every student can grow with confidence and pride.
            </p>
            <p className="text-muted-foreground text-center leading-relaxed mb-4">
              As a rural school, we understand the unique challenges faced by our community. Yet, year after year, our students have risen to shine in academics, public examinations, and various competitions—testament to their hard work and the unwavering support of our teachers, parents, and alumni.
            </p>
            <p className="text-muted-foreground text-center leading-relaxed">
              As we celebrate 50 remarkable years, we look forward to continuing our mission of transforming lives through learning, inspiring future generations to dream bigger and reach higher.
            </p>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section id="vision-mission" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-primary mb-4">Vision & Mission</h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-12 rounded-full" />
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <Card className="border-none shadow-xl bg-card">
              <CardContent className="p-8">
                <h3 className="font-display text-xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To be a leading institution that nurtures holistic development, academic excellence, and strong moral values. We envision creating confident, compassionate individuals who contribute meaningfully to society while staying rooted in our cultural heritage.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-xl bg-card">
              <CardContent className="p-8">
                <h3 className="font-display text-xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To provide quality education in a caring environment, ensuring every child receives equal opportunities regardless of background. We are committed to excellence in character, academics, and co-curricular activities through dedicated faculty and modern facilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ABOUT / LEADERSHIP */}
      <section id="about" className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-primary mb-4">Our Leadership</h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-16 rounded-full" />
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <Card className="border-none shadow-xl bg-card overflow-hidden">
              <CardContent className="p-8 text-center">
                <img src={chairmanImg} alt="Mr. S. Thiruvengadam - Chairman" className="mx-auto h-36 w-36 rounded-full object-cover border-4 border-primary shadow-lg mb-6" />
                <h3 className="font-display text-xl font-bold text-primary mb-1">Mr. S. Thiruvengadam</h3>
                <p className="text-secondary font-semibold text-sm mb-5 tracking-wide">Chairman</p>
                <blockquote className="text-muted-foreground text-sm leading-relaxed italic border-l-4 border-secondary pl-4 text-left">
                  "It gives me immense pride and heartfelt joy to share this message as we celebrate 50 glorious years of our beloved institution, SLMHSS. What began as a humble effort to provide quality education in a rural setting has today grown into a respected center of learning and character building. As a businessman, I believe true success is measured by the positive impact we create in society. Education is the most powerful investment for the future. I extend my sincere gratitude to our dedicated teachers, supportive parents, and hardworking students. Let us continue this journey together, building brighter futures and stronger communities."
                </blockquote>
              </CardContent>
            </Card>
            <Card className="border-none shadow-xl bg-card overflow-hidden">
              <CardContent className="p-8 text-center">
                <img src={secretaryImg} alt="Mr. T. Krishna Prasath - Secretary" className="mx-auto h-36 w-36 rounded-full object-cover border-4 border-primary shadow-lg mb-6" />
                <h3 className="font-display text-xl font-bold text-primary mb-1">Mr. T. Krishna Prasath, B.Com., CA</h3>
                <p className="text-secondary font-semibold text-sm mb-5 tracking-wide">Secretary</p>
                <blockquote className="text-muted-foreground text-sm leading-relaxed italic border-l-4 border-secondary pl-4 text-left">
                  With great pride and deep gratitude, I share this message as we celebrate 50 remarkable years of our esteemed institution, SLMHSS. As a second-generation member, I feel honored to carry forward this noble legacy. My mission is to preserve our core values while embracing modern advancements in education. We are committed to strengthening academic excellence, improving infrastructure, and ensuring our students meet global standards without losing their cultural roots. I extend my heartfelt thanks to our Chairman, teachers, parents, and students. Let us move forward with unity and a shared vision of excellence.
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section id="facilities" className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-primary mb-2">Our Facilities</h2>
          <p className="text-center text-secondary font-display text-lg mb-4">Improving Tomorrow by Learning Today</p>
          <div className="h-1 w-20 bg-secondary mx-auto mb-12 rounded-full" />
          <p className="max-w-3xl mx-auto text-center text-muted-foreground mb-14 leading-relaxed">
            Star Lions Matriculation School, one of the most prestigious schools in Thanjavur district, is located on a sprawling 4.5 acre campus. The school is committed to providing an environment that is intellectually stimulating and challenging as well as caring, to ensure excellence in character.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <Card className="border-none shadow-lg bg-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary">Infrastructure</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Classrooms are ideally spacious, airy and illuminated. Modern furniture has been provided for students. Our class strength is small and we use an excellent student-teacher ratio to recognize different types of intelligence. Star Lions follows the syllabus prescribed by Government of Tamil Nadu.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <FlaskConical className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary">Laboratories</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Star Lions has separate and modern Laboratories for Biology, Physics and Chemistry with the best equipment and able staff. Our school has installed a computer system lab that is radically prospective. Computers are a compulsory part of the curriculum.
                </p>
              </CardContent>
            </Card>
          </div>
          <h3 className="font-display text-2xl font-bold text-center text-primary mb-6">Extra Curricular Activities</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {[
              { icon: Footprints, text: "Bharatham" },
              { icon: Move, text: "Western Dance" },
              { icon: Gamepad2, text: "Chess" },
              { icon: Swords, text: "Silambam" },
              { icon: Trophy, text: "Karate" },
              { icon: LayoutGrid, text: "Carrom" },
              { icon: Piano, text: "Keyboard" },
              { icon: Flower2, text: "Yoga" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-5 rounded-xl bg-card shadow-md hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-xs font-medium text-muted-foreground leading-snug">{item.text}</p>
              </div>
            ))}
          </div>
          <h3 className="font-display text-2xl font-bold text-center text-primary mb-6">Transport Facility</h3>
          <div className="max-w-2xl mx-auto mb-12">
            <Card className="border-none shadow-lg bg-card overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-muted relative flex items-center justify-center overflow-hidden">
                  <img src="/van.jpeg" alt="School Van - Transport Facility" className="w-full h-auto block" onLoad={() => setVanImageLoaded(true)} onError={() => setVanImageLoaded(false)} />
                  {!vanImageLoaded && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground p-6 bg-muted/80 min-h-[300px]">
                    <Bus className="h-16 w-16 mb-4 opacity-50" />
                  </div>
                  )}
                </div>
                <div className="p-6">
                  <h4 className="font-display font-bold text-primary mb-2">Safe & Convenient Transport</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We provide van facility for all destinations at low cost. Our transport service ensures safe and timely pickup and drop for students across the area.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <h3 className="font-display text-2xl font-bold text-center text-primary mb-10">Salient Aspects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {salientAspects.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-5 rounded-xl bg-card shadow-md hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center mb-3">
                  <item.icon className={`h-6 w-6 ${item.color}`} />
                </div>
                <p className="text-xs font-medium text-muted-foreground leading-snug">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACADEMICS */}
      <section id="academics" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-primary mb-4">Academics</h2>
          <p className="text-center text-muted-foreground mb-2">2008 – 2010 Curriculum</p>
          <div className="h-1 w-20 bg-secondary mx-auto mb-12 rounded-full" />
          <div className="max-w-2xl mx-auto">
            <Card className="border-none shadow-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-primary hover:bg-primary">
                    <TableHead className="text-primary-foreground font-semibold">Part</TableHead>
                    <TableHead className="text-primary-foreground font-semibold">Subjects</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow><TableCell className="font-medium text-primary">Part 1</TableCell><TableCell>Tamil</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium text-primary">Part 2</TableCell><TableCell>English</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium text-primary">Part 3</TableCell><TableCell>Maths, Physics, Chemistry, Biology</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium text-primary">Part 4</TableCell><TableCell>Maths, Physics, Chemistry, Computer Science</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium text-primary">Part 5</TableCell><TableCell>Commerce, Accountancy, Computer Science, Economics</TableCell></TableRow>
                </TableBody>
              </Table>
            </Card>
          </div>
        </div>
      </section>

      {/* VIDEO / EVENTS */}
      <section id="events" className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-primary mb-4">School Events</h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-12 rounded-full" />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <p className="text-center text-secondary font-display text-lg mb-4">Marathon</p>
              <Card className="border-none shadow-xl overflow-hidden bg-card">
                <video controls className="w-full aspect-video" poster={logoImg}>
                  <source src="/marathon-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Card>
            </div>
            <div>
              <p className="text-center text-secondary font-display text-lg mb-4">Cultural</p>
              <Card className="border-none shadow-xl overflow-hidden bg-card">
              <video controls className="w-full aspect-video" poster={logoImg}>
                  <source src="/cultural.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION / CONTACT */}
      <section id="contact" className="py-20 md:py-28">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-primary mb-4">Our Location</h2>
          <p className="text-center text-muted-foreground mb-2">Visit Us</p>
          <div className="h-1 w-20 bg-secondary mx-auto mb-12 rounded-full" />
        </div>
        <div className="w-full h-[500px] md:h-[600px]">
          <iframe
            src="https://www.google.com/maps?q=10.8961519,79.1852112&hl=en&z=17&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full block"
            title="Star Lions Matriculation Hr. Sec. School Location"
          />
        </div>
        <div className="container mx-auto px-4 mt-6">
          <Card className="border-none shadow-xl overflow-hidden bg-card">
            <CardContent className="p-6 bg-muted/30">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-primary mb-2">Star Lions Matriculation Hr. Sec. School</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Find us at our campus location. We welcome visitors and are happy to provide directions.
                  </p>
                  <a
                    href="https://www.google.com/maps/place/Star+Lions+Matriculation+Hr+Sec+School/@10.8961572,79.1826363,17z/data=!3m1!4b1!4m6!3m5!1s0x3baac5ec28866aa7:0xc5e0f001f1562fda!8m2!3d10.8961519!4d79.1852112!16s%2Fg%2F11cm16fm0s?entry=ttu&g_ep=EgoyMDI2MDIxNy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-secondary/80 font-medium text-sm inline-flex items-center gap-2 transition-colors"
                  >
                    Open in Google Maps
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
