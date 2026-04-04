import { motion } from "framer-motion";
import placeholderMain from "../../assets/images/Doctors.jpg";
import placeholderSmall1 from "../../assets/images/DailyImpact.jpeg";
import placeholderSmall2 from "../../assets/images/Treatment.jpeg";

const testimonials = [
  {
    id: 1,
    image: placeholderMain,
    quote: "I trusted the journey and the results speak for themselves",
    author: "Soham",
  },
  {
    id: 2,
    image: placeholderMain,
    quote: "Got my knee back to normal thanks to Samhitha!",
    author: "Swati",
  },
  {
    id: 3,
    image: placeholderMain,
    quote: "I'm so glad I decided to act and saved my cartilage",
    author: "Bharat",
  },
  {
    id: 4,
    image: placeholderMain,
    quote: "Pain stopped, even saw mobility return with Samhitha",
    author: "Arundhati",
  },
  {
    id: 5,
    image: placeholderMain,
    quote: "I saw incredible results in 9 months",
    author: "Mayil",
  },
];

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-emerald-50 pb-14 pt-12 md:pb-16 md:pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          className="mx-auto max-w-3xl text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm backdrop-blur">
            Testimonials
          </div>
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Our Success Stories
          </h2>
        </motion.div>

        {/* Scrollable Container */}
        <div className="flex overflow-x-auto pb-8 gap-4 sm:gap-6 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              className="min-w-[260px] md:min-w-[280px] w-[260px] md:w-[280px] flex-shrink-0 snap-center flex flex-col rounded-2xl overflow-hidden shadow-lg border border-gray-100"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Image & Video Top Part */}
              <div className="relative h-[320px] md:h-[360px] w-full bg-gray-200">
                <img src={item.image} alt="Success Story" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/10"></div>
                
                {/* Play Button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white transition-colors shadow-md">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-gray-800 border-b-[8px] border-b-transparent ml-1"></div>
                </div>

                {/* Small Before/After Overlays on the right */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                  <div className="relative w-14 h-14 rounded-lg border-2 border-white/80 overflow-hidden shadow-sm">
                    <img src={placeholderSmall1} alt="Month 1" className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 inset-x-0 bg-black/50 text-[8px] text-center text-white py-0.5">Month 1</div>
                  </div>
                  <div className="relative w-14 h-14 rounded-lg border-2 border-white/80 overflow-hidden shadow-sm">
                    <img src={placeholderSmall2} alt="Month 6" className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 inset-x-0 bg-black/50 text-[8px] text-center text-white py-0.5">Month 6</div>
                  </div>
                </div>
              </div>

              {/* Text Bottom Part */}
              <div className="bg-gray-50 flex-1 p-5">
                <div className="border-l-4 border-emerald-400 pl-3 h-full flex flex-col justify-center">
                  <p className="text-gray-900 text-sm font-semibold leading-tight line-clamp-3">
                    {item.quote}
                  </p>
                  <p className="text-gray-500 text-xs mt-2 font-medium">
                    -{item.author}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-4">
          <div className="h-2 w-2 rounded-full bg-gray-800"></div>
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
{/* Custom style for scrollbar hide in case globals.css doesn't have it */}
<style dangerouslySetInnerHTML={{__html: `
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
`}} />
    </section>
  );
};

export default Testimonials;
