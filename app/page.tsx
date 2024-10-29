import BlogComponent from "@/components/Blog";
import Landing from "@/components/Landing";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Services />
      <BlogComponent />
    </div>
  );
}
