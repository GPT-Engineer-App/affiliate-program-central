import { useState } from "react";
import { Button } from "@/components/ui/button";
import ApplicationForm from "./ApplicationForm";

const ProgramDetails = ({ program, onClose }) => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const handleApply = () => {
    setShowApplicationForm(true);
  };

  const handleSubmitApplication = (applicationData) => {
    // TODO: Implement actual submission logic
    console.log("Submitting application:", applicationData);
    setShowApplicationForm(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        {!showApplicationForm ? (
          <>
            <h2 className="text-2xl font-bold mb-4">{program.name}</h2>
            <p className="mb-4">{program.description}</p>
            <p className="mb-4">Category: {program.category}</p>
            <p className="mb-4">Commission: {program.commission}%</p>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={onClose}>Close</Button>
              <Button onClick={handleApply}>Apply</Button>
            </div>
          </>
        ) : (
          <ApplicationForm
            program={program}
            onSubmit={handleSubmitApplication}
            onCancel={() => setShowApplicationForm(false)}
          />
        )}
      </div>
    </div>
  );
};

export default ProgramDetails;