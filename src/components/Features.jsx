import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, DollarSign, BarChart } from "lucide-react";

const features = [
  {
    icon: <Search className="h-8 w-8 mb-4" />,
    title: "Easy Search",
    description: "Find the perfect affiliate programs with our powerful search tool.",
  },
  {
    icon: <DollarSign className="h-8 w-8 mb-4" />,
    title: "High Commissions",
    description: "Access programs with competitive commission rates to maximize your earnings.",
  },
  {
    icon: <BarChart className="h-8 w-8 mb-4" />,
    title: "Performance Tracking",
    description: "Monitor your performance and optimize your affiliate marketing strategy.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  {feature.icon}
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;