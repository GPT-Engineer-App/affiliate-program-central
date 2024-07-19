import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProgramDetails from "./ProgramDetails";

const ProgramList = ({ programs }) => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {programs.map((program) => (
        <div key={program.id} className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">{program.name}</h2>
          <p className="text-gray-600 mb-4">{program.description}</p>
          <Button variant="outline" onClick={() => setSelectedProgram(program)}>
            View Details
          </Button>
        </div>
      ))}
      {selectedProgram && (
        <ProgramDetails
          program={selectedProgram}
          onClose={() => setSelectedProgram(null)}
        />
      )}
    </div>
  );
};

export default ProgramList;