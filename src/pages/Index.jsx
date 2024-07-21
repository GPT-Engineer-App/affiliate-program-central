import { useState } from "react";
import ProgramList from "@/components/ProgramList";
import SearchBar from "@/components/SearchBar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [programs, setPrograms] = useState([
    { id: 1, name: "Program 1", description: "Description for Program 1" },
    { id: 2, name: "Program 2", description: "Description for Program 2" },
    { id: 3, name: "Program 3", description: "Description for Program 3" },
    { id: 4, name: "Program 4", description: "Description for Program 4" },
    { id: 5, name: "Program 5", description: "Description for Program 5" },
    { id: 6, name: "Program 6", description: "Description for Program 6" },
  ]);

  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: Implement actual search functionality
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <main className="flex-grow">
        <Features />
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-8">Discover Affiliate Programs</h2>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSearch={handleSearch}
          />
          <ProgramList programs={programs} />
        </div>
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;