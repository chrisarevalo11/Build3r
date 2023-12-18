import {
  Contribute,
  Create,
  Evaluate,
  Final,
  Hero,
} from "@/components/landing";

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col gap-10 md:gap-4">
      <Hero />
      <Create />
      <Contribute />
      <Evaluate />
      <Final />
    </div>
  );
}
