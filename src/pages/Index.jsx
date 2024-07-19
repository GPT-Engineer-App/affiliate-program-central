import { useState } from "react";
import ProgramList from "@/components/ProgramList";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [programs, setPrograms] = useState([
    { id: 1, name: "Tech Program 1", description: "Description for Tech Program 1", category: "technology", commission: 10 },
    { id: 2, name: "Fashion Program 1", description: "Description for Fashion Program 1", category: "fashion", commission: 15 },
    { id: 3, name: "Health Program 1", description: "Description for Health Program 1", category: "health", commission: 12 },
    { id: 4, name: "Finance Program 1", description: "Description for Finance Program 1", category: "finance", commission: 20 },
    { id: 5, name: "Tech Program 2", description: "Description for Tech Program 2", category: "technology", commission: 8 },
    { id: 6, name: "Fashion Program 2", description: "Description for Fashion Program 2", category: "fashion", commission: 18 },
  ]);
  const [filteredPrograms, setFilteredPrograms] = useState(programs);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = programs.filter(program => 
      program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPrograms(filtered);
  };

  const handleFilter = (filters) => {
    const filtered = programs.filter(program => 
      (!filters.category || program.category === filters.category) &&
      program.commission >= filters.minCommission
    );
    setFilteredPrograms(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Affiliate Program Discovery</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <FilterBar onFilter={handleFilter} />
      <ProgramList programs={filteredPrograms} />
    </div>
  );
};

export default Index;