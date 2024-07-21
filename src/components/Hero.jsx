import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Discover Top Affiliate Programs</h1>
        <p className="text-xl mb-8">Find the perfect affiliate programs to boost your earnings</p>
        <Button size="lg">Get Started</Button>
      </div>
    </section>
  );
};

export default Hero;