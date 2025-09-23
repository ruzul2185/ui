import Image from "next/image";

const header = () => {
  return (
    <header className="flex justify-between ">
      <div className="cursor-pointer hover:bg-gray-300 p-2 rounded">
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
      </div>
      <nav>
        <ul className="flex">
          <li>Docs</li>
          <li>Themes</li>
          <li>Components</li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
