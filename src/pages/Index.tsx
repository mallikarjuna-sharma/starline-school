import { useState, useEffect, useCallback } from "react";
import { GraduationCap, Building, FlaskConical, Heart, Shield, Bus, Monitor, Users, Eye, Dumbbell, Music, BookOpen, Baby, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logoImg from "@/assets/logo.png";
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
  { icon: Heart, text: "Healthy and Hygienic Environment" },
  { icon: Baby, text: "Education with a Mother's Touch" },
  { icon: GraduationCap, text: "Highly Qualified, Experienced and Dedicated Faculty" },
  { icon: Monitor, text: "Smart Class Facility & AC Classrooms for Pre-KG" },
  { icon: BookOpen, text: "Age-appropriate Education for Every Student" },
  { icon: Users, text: "Continuous Assessment & Parent Reporting" },
  { icon: Dumbbell, text: "Well Developed Sports Facility" },
  { icon: Music, text: "Co-curricular: Karate, Yoga, Music, Dance, Art & Craft" },
  { icon: Eye, text: "Personal Care with CCTV Surveillance" },
  { icon: Bus, text: "Van Facility for All Destinations at Low Cost" },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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


  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />

      {/* HERO CAROUSEL */}
      <section id="home" className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={slide}
              alt={`School Event ${i + 1}`}
              className="w-full h-full object-cover object-center"
              style={{ objectFit: "cover" }}
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
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 rounded-full transition-all ${i === currentSlide ? "w-8 bg-secondary" : "w-2.5 bg-white/50"}`}
            />
          ))}
        </div>
      </section>

      {/* ABOUT / LEADERSHIP */}
      <section id="about" className="py-20 md:py-28">
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
                  "It gives me immense pride and heartfelt joy to share this message as we celebrate 50 glorious years of our beloved institution, SLMHSS. What began as a humble effort to provide quality education in a rural setting has today grown into a respected center of learning and character building.

As a businessman, I strongly believe that true success is not measured only in profits, but in the positive impact we create in society. Education is the most powerful investment we can make for the future. With this vision, our school was established to ensure that children from rural backgrounds receive the same opportunities, exposure, and quality education as those in urban areas.

Over the past five decades, our school has remained committed to academic excellence, discipline, and moral values. We strive to create an environment where students are encouraged to dream big, think independently, and develop the confidence to face global challenges while staying rooted in our cultural heritage.

I extend my sincere gratitude to our dedicated teachers, supportive parents, hardworking students, and proud alumni who have contributed to this remarkable journey. Their commitment and trust have been the foundation of our success.

As we move forward, we remain determined to upgrade our facilities, adopt modern teaching methodologies, and continue nurturing future leaders who will contribute meaningfully to society.

Let us continue this journey together, building brighter futures and stronger communities."
                </blockquote>
              </CardContent>
            </Card>
            <Card className="border-none shadow-xl bg-card overflow-hidden">
              <CardContent className="p-8 text-center">
                <img src={secretaryImg} alt="Mr. T. Krishna Prasath - Secretary" className="mx-auto h-36 w-36 rounded-full object-cover border-4 border-primary shadow-lg mb-6" />
                <h3 className="font-display text-xl font-bold text-primary mb-1">Mr. T. Krishna Prasath, B.Com., CA</h3>
                <p className="text-secondary font-semibold text-sm mb-5 tracking-wide">Secretary</p>
                <blockquote className="text-muted-foreground text-sm leading-relaxed italic border-l-4 border-secondary pl-4 text-left">
                  With great pride and deep gratitude, I share this message as we celebrate 50 remarkable years of our esteemed institution, SLMHSS.

As a second-generation member entrusted with the responsibility of carrying forward this noble legacy, I feel both honored and humbled. What was started five decades ago with a strong vision to provide quality education to rural children has today grown into a pillar of knowledge, discipline, and values in our community.

Growing up witnessing the dedication and commitment behind this institution, I understand the hard work and sacrifice that built its foundation. Today, my mission is to preserve those core values while embracing modern advancements in education. We are committed to strengthening academic excellence, improving infrastructure, integrating technology in classrooms, and ensuring that our students are equipped to meet global standards without losing their cultural roots.

Our rural background is not a limitation—it is our strength. We take pride in nurturing confident, capable, and compassionate individuals who go on to achieve success in various fields while remembering their origins.

I extend my heartfelt thanks to our Chairman, management, teachers, parents, alumni, and students who continue to support and trust us. Together, we will build on this proud legacy and shape an even brighter future for generations to come.

Let us move forward with unity, dedication, and a shared vision of excellence.                </blockquote>
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
          <h3 className="font-display text-2xl font-bold text-center text-primary mb-10">Salient Aspects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {salientAspects.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-5 rounded-xl bg-card shadow-md hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <item.icon className="h-5 w-5 text-primary" />
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
          <p className="text-center text-secondary font-display text-lg mb-4">Marathon</p>
          <div className="h-1 w-20 bg-secondary mx-auto mb-12 rounded-full" />
          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-xl overflow-hidden bg-card">
              <video controls className="w-full aspect-video" poster={logoImg}>
                <source src="/marathon-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
