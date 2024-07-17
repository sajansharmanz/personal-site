import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import useScrollToTop from "../../hooks/scrollToTop";
import Footer from "../Footer";

interface Props {
  children?: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  useScrollToTop();

  return (
    <div className="relative h-fit min-h-screen w-screen bg-slate-100 px-2 pb-6 text-slate-900 antialiased selection:bg-slate-900 selection:text-slate-50 sm:px-0">
      <Navbar />

      <main className="pt-24 sm:mx-auto sm:max-w-[560px]">
        <div className="rounded-lg bg-white p-4">
          <Outlet />
          {children}
          <Footer />
        </div>
      </main>
    </div>
  );
}
