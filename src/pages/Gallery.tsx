import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import all gallery images dynamically
const galleryImages = import.meta.glob("../assets/gallery-*.jpg", { eager: true, import: "default" }) as Record<string, string>;

// Generate captions for gallery images
const generateCaption = (index: number): string => {
  const captions = [
    "School Assembly & Morning Prayer",
    "Students in Classroom Learning",
    "Cultural Dance Performance",
    "Sports Day Celebration",
    "Annual Day Function",
    "Science Exhibition",
    "Art & Craft Display",
    "Music & Dance Recital",
    "Independence Day Celebration",
    "Republic Day Parade",
    "Children's Day Event",
    "Teachers Day Celebration",
    "Graduation Ceremony",
    "Award Distribution",
    "Inter-School Competition",
    "Field Trip Adventure",
    "Library Reading Session",
    "Computer Lab Activity",
    "Laboratory Experiment",
    "Yoga & Meditation Class",
    "Karate Training Session",
    "Basketball Practice",
    "Cricket Match",
    "Athletics Competition",
    "Group Photo Session",
    "Cultural Program",
    "Drama Performance",
    "Debate Competition",
    "Quiz Contest",
    "Drawing Competition",
    "School Picnic",
    "Educational Tour",
    "Workshop Session",
    "Guest Lecture",
    "Parent-Teacher Meeting",
    "School Festival",
    "Traditional Day Celebration",
    "Fancy Dress Competition",
    "Story Telling Session",
    "Math Olympiad",
    "Science Fair",
    "Robotics Workshop",
    "Environmental Awareness Program",
    "Tree Plantation Drive",
    "Cleanliness Campaign",
    "Health Check-up Camp",
    "Blood Donation Drive",
    "Community Service",
    "Charity Event",
    "Fundraising Activity",
    "School Band Performance",
    "Choir Singing",
    "Instrumental Music",
    "Classical Dance",
    "Folk Dance",
    "Western Dance",
    "Mime Show",
    "Skit Performance",
    "Poetry Recitation",
    "Elocution Competition",
    "Spelling Bee",
    "Handwriting Competition",
    "Calligraphy Display",
    "Painting Exhibition",
    "Sculpture Art",
    "Pottery Making",
    "Origami Workshop",
    "Rangoli Competition",
    "Cooking Competition",
    "Gardening Activity",
    "Nature Walk",
    "Bird Watching",
    "Star Gazing",
    "Telescope Observation",
    "School Infrastructure",
    "Playground Activities"
  ];
  return captions[index % captions.length] || `School Event ${index + 1}`;
};

// Convert gallery images to array with captions
const images = Object.entries(galleryImages)
  .sort((a, b) => {
    // Extract number from filename for sorting
    const numA = parseInt(a[0].match(/gallery-(\d+)/)?.[1] || "0");
    const numB = parseInt(b[0].match(/gallery-(\d+)/)?.[1] || "0");
    return numA - numB;
  })
  .map(([path, src], index) => ({
    src: src as string,
    // alt: generateCaption(index),
  }));

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-center text-primary mb-4 mt-8">
            Gallery
          </h1>
          <p className="text-center text-muted-foreground mb-2">School Events & Celebrations</p>
          <div className="h-1 w-20 bg-secondary mx-auto mb-12 rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {images.map((img, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
