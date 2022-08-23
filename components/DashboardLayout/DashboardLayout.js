import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

export default function DashboardLayout() {
  const [isOpened, setOpened] = useState(false);
  const toggleDrawer = () => {
    setOpened((prev) => !prev);
  };

  return (
    <div className="container mx-auto">
      <Sidebar isOpened={isOpened} />
    </div>
  );
}
