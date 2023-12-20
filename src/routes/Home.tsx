import {
  Contribute,
  Create,
  Evaluate,
  Final,
  Hero,
} from "../components/landing";
import Container from "@/components/ui/Container";

export default function Home(): JSX.Element {
  return (
    <Container className="flex flex-col gap-10 md:gap-4">
      <Hero />
      <Create />
      <Contribute />
      <Evaluate />
      <Final />
    </Container>
  );
}
