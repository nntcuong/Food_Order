import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProImage from "@/components/ProImage";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ProImage/>
      <div className="container mx-auto flex-1 py-10">{children}</div>
      <Footer/>
    </div>
  );
};

export default Layout;
