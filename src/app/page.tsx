import { Banner } from "./_components/Banner";
import { Navbar } from "./_components/Navbar";
import { Hero } from "./_components/Hero";
import { Courses } from "./_components/Courses";
import { ContactUs } from "./_components/ContactUs";
import { Footer } from "./_components/Footer";
import { cookies } from "next/headers";
import { BASE_URL } from "@/config/url";
const getProfile = async () => {
  if (!cookies().has("token")) return;
  const res = await fetch(`${BASE_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${cookies().get("token")?.value}`,
    },
  });
  const data = await res.json();
  return data;
};
export default async function Home() {
  const profile = await getProfile();
  console.log(profile);

  return (
    <main>
      <Navbar />
      <Banner avatar={profile?.avatar} username={profile.username} />
      <Hero />
      <Courses />
      <ContactUs />
      <Footer />
    </main>
  );
}
