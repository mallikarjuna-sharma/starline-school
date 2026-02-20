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
                  "The highest intellectual achievements is the true actualization of thoughts. Our School is the platform where children get a chance to develop their faculties while preparing them to be kind souls. As children grow at Star Lions Matriculation Hr. Sec. School they follow the norms and guidelines laid down for them."
                </blockquote>
              </CardContent>
            </Card>
            <Card className="border-none shadow-xl bg-card overflow-hidden">
              <CardContent className="p-8 text-center">
                <img src={secretaryImg} alt="Mr. T. Krishna Prasath - Secretary" className="mx-auto h-36 w-36 rounded-full object-cover border-4 border-primary shadow-lg mb-6" />
                <h3 className="font-display text-xl font-bold text-primary mb-1">Mr. T. Krishna Prasath, B.Com., CA</h3>
                <p className="text-secondary font-semibold text-sm mb-5 tracking-wide">Secretary</p>
                <blockquote className="text-muted-foreground text-sm leading-relaxed italic border-l-4 border-secondary pl-4 text-left">
                  "With advancement in the field of information technology, education today has acquired a new enchanting face. Schools are the training grounds for the future of this nation. Star Lions Matriculation Hr. Sec. School has continued to keep pace with the changing environment and has helped evolve intelligent, responsible and successful human beings."
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
