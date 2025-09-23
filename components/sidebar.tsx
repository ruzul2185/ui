import Link from "next/link";

const sidebar = () => {
  return (
    <div className="py-8 border-r-2 border-divider">
      <div className="font-bold p-1">Get Started</div>
      <Link
        href="/docs/installation"
        className="p-1 hover:bg-hover-anchor rounded w-full"
      >
        Installation
      </Link>
    </div>
  );
};

export default sidebar;
