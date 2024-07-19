import { useState } from "react";
import ProgramList from "@/components/ProgramList";
import SearchBar from "@/components/SearchBar";

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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Affiliate Program Discovery</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <ProgramList programs={programs} />
    </div>
  );
};

export default Index;