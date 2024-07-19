import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const FilterBar = ({ onFilter }) => {
  const [category, setCategory] = useState("");
  const [minCommission, setMinCommission] = useState("");

  const handleFilter = () => {
    onFilter({ category, minCommission: parseFloat(minCommission) || 0 });
  };

  return (
    <div className="flex flex-col gap-4 mb-8">
      <div className="flex gap-4">
        <div className="flex-1">
          <Label htmlFor="category">Category</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger id="category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="fashion">Fashion</SelectItem>
              <SelectItem value="health">Health</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <Label htmlFor="minCommission">Min Commission (%)</Label>
          <Input
            id="minCommission"
            type="number"
            min="0"
            max="100"
            value={minCommission}
            onChange={(e) => setMinCommission(e.target.value)}
          />
        </div>
      </div>
      <Button onClick={handleFilter}>Apply Filters</Button>
    </div>
  );
};

export default FilterBar;