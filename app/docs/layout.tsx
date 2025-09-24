import Sidebar from "@/components/sidebar";
import { ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return (
    <section className="flex py-5">
      <div className="flex-1">
        <Sidebar />
      </div>
      <div className="flex-4 flex justify-center">{children}</div>
    </section>
  );
};

export default layout;
