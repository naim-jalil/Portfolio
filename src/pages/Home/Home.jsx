import { useLoaderData } from "react-router";
import {
  Hero,
  About,
  Skills,
  Projects,
  Blog,
  Work,
  Contact,
} from "../../components/Home";

export default function Home() {
  const data = useLoaderData();

  console.log("Home component loaded with data:", data);

  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}
