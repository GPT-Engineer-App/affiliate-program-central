import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "This platform helped me find the perfect affiliate programs for my niche. My earnings have doubled!",
    name: "Sarah Johnson",
    title: "Lifestyle Blogger",
  },
  {
    quote: "The search functionality is top-notch. I can easily filter and find high-paying programs.",
    name: "Mike Thompson",
    title: "Affiliate Marketer",
  },
  {
    quote: "Great resource for both beginners and experienced marketers. Highly recommended!",
    name: "Emily Chen",
    title: "Digital Entrepreneur",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="relative">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="text-center py-10">
              <p className="text-xl mb-6">"{testimonials[currentIndex].quote}"</p>
              <p className="font-semibold">{testimonials[currentIndex].name}</p>
              <p className="text-sm text-gray-500">{testimonials[currentIndex].title}</p>
            </CardContent>
          </Card>
          <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
            <Button variant="ghost" onClick={prevTestimonial} className="text-gray-500 hover:text-gray-700">
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button variant="ghost" onClick={nextTestimonial} className="text-gray-500 hover:text-gray-700">
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;