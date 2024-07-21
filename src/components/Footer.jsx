import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">We help affiliate marketers find the best programs to maximize their earnings.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><NavLink to="/" className="text-sm hover:text-blue-400">Home</NavLink></li>
              <li><NavLink to="/programs" className="text-sm hover:text-blue-400">Programs</NavLink></li>
              <li><NavLink to="/about" className="text-sm hover:text-blue-400">About</NavLink></li>
              <li><NavLink to="/contact" className="text-sm hover:text-blue-400">Contact</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><NavLink to="/terms" className="text-sm hover:text-blue-400">Terms of Service</NavLink></li>
              <li><NavLink to="/privacy" className="text-sm hover:text-blue-400">Privacy Policy</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-blue-400">Facebook</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400">Twitter</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; 2023 Affiliate Program Discovery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;