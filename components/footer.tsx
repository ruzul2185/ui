const footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-6 text-gray-600">
          <a href="#" className="hover:text-gray-900 transition-colors">
            Documentation
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors">
            NPM
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors">
            Support
          </a>
        </div>
        <div className="text-gray-500 text-sm">
          © 2025 UI Library. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default footer;
