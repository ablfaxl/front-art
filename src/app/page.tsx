import { Banner } from "./_home/_components/Banner";
import { Navbar } from "./_home/_components/Navbar";
import { Hero } from "./_home/_components/Hero";
import { Courses } from "./_home/_components/Courses";
import { ContactUs } from "./_home/_components/ContactUs";
import { Footer } from "./_home/_components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Hero />
      <Courses />
      <ContactUs />
      <Footer />
    </main>
  );
}
