import Sidebar from "@/components/sidebar";
import { ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return (
    <section className="flex py-5">
      <div className="flex-none hidden md:block">
        <Sidebar />
      </div>
      <div className="flex-1 flex justify-center w-full">{children}</div>
    </section>
  );
};

export default layout;
