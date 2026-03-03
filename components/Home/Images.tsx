import { div } from "framer-motion/client";
import { AngledSlider } from "../lightswind/angled-slider";


export function Images() {
  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=1000&q=80",
      title: "Mountain View",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=1000&q=80",
      title: "Ocean Breeze",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=80",
      title: "Forest Mist",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1000&q=80",
      title: "Canyon Echo",
    },
     {
      id: 5,
      url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1000&q=80",
      title: "Canyon Echo",
    },
     {
      id: 6,
      url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1000&q=80",
      title: "Canyon Echo",
    },
  ];

  return <div className="w-full h-screen flex justify-center items-center">
<AngledSlider  items={images} speed={30} />;
  </div>
   
}