import { Button } from "@/components/ui/button";

const ProgramDetails = ({ program, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">{program.name}</h2>
        <p className="mb-4">{program.description}</p>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>Close</Button>
          <Button>Apply</Button>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;