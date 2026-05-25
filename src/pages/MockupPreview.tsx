import { WelcomeScreen } from "@/components/screens/WelcomeScreen";
import { HomeScreen } from "@/components/screens/HomeScreen";
import { ServiceScreen1 } from "@/components/screens/ServiceScreen1";
import { ServiceScreen2 } from "@/components/screens/ServiceScreen2";
import { PhoneFrame } from "@/components/PhoneFrame";

const MockupPreview = () => (
  <main className="min-h-screen w-full bg-gradient-soft py-10 px-4 flex items-center justify-center">
    <div className="flex flex-wrap gap-8 justify-center items-center">
      <PhoneFrame label="Welcome"><WelcomeScreen /></PhoneFrame>
      <PhoneFrame label="Home"><HomeScreen /></PhoneFrame>
      <PhoneFrame label="Lawyer Consultation"><ServiceScreen1 /></PhoneFrame>
      <PhoneFrame label="Visa & Migration Review"><ServiceScreen2 /></PhoneFrame>
    </div>
  </main>
);

export default MockupPreview;