import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProgramDetails from "./ProgramDetails";

const ProgramList = ({ programs }) => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {programs.map((program) => (
        <Card key={program.id}>
          <CardHeader>
            <CardTitle>{program.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{program.description}</p>
            <Button variant="outline" onClick={() => setSelectedProgram(program)}>
              View Details
            </Button>
          </CardContent>
        </Card>
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