import { HeroVideo } from "@/components/HeroVideo";
import { Pillars } from "@/components/Pillars";
import { LeaderProfile } from "@/components/LeaderProfile";
import { ImpactStrip } from "@/components/ImpactStrip";
import { Stories } from "@/components/Stories";
import { CallToAction } from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <HeroVideo />
      <Pillars />
      <LeaderProfile />
      <ImpactStrip />
      <Stories />
      <CallToAction />
    </>
  );
}
