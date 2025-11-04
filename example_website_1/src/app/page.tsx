import About from "./sections/About";
import Facts from "./sections/Facts";
import Hero from "./sections/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="id">
        <About />
        <Facts />
      </main>
    </>
  );
}
