import { blogData } from "@/components/Home/BlogData";
import Blog from "@/components/Blog/Blog";

export default function BlogS() {
  return (
    <main>
     <Blog blogs={blogData} />
    </main>
  );
}