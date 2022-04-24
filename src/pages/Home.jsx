import Hero from "../components/hero/Hero";
import ObjectiveContent from "../components/contents/homeContent/ObjectiveContent";
import IconContent from "../components/contents/homeContent/IconContent";
import SubscribeContent from "../components/contents/homeContent/SubscribeContent";
import PartnersContent from "../components/contents/homeContent/PartnersContent";
import SocialContent from "../components/contents/newsContent/SocialContent";

export default function Home() {
  return (
    <>
      <Hero />
      <ObjectiveContent />
      <IconContent />
      <PartnersContent />
      <SubscribeContent />
    </>
  );
}
