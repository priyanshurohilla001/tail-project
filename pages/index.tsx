import { CallToAction } from "@/components/CallToAction";
import { FeaturesComponents } from "@/components/FeaturesComponents";
import { GridBasics } from "@/components/GridBasics";
import { NumbersComponent } from "@/components/NumbersComponent";
import { RandomComponent } from "@/components/RandomComponent";
import { Testinomials } from "@/components/Testinomials";

export default function App(){
  return <div>
    <GridBasics/>
    <FeaturesComponents/>
    <NumbersComponent/>
    <RandomComponent/>
    <CallToAction/>
    <Testinomials/>
  </div>
}