import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main
      className="
        min-h-[520px]
        px-6 py-8
        sm:px-10 sm:py-12
        flex flex-col
      "
    >
      <Outlet />
    </main>
  );
};

export default Layout;
