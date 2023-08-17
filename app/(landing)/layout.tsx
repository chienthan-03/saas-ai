import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";

const LandingPage = () => {
  return ( 
    <div className="h-full bg-[#111827]">
      <LandingNavbar />
      <LandingHero />
    </div>
   );
}
 
export default LandingPage;
