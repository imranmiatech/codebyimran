
import Navber from "@/components/Shared/Navber";
import Homes from "@/Pages/Homes";


export default function Home() {
  return (
    <div className="flex flex-col bg-black  w-full items-center justify-center">
      <Navber />
      <Homes />
    </div>
  );
}
