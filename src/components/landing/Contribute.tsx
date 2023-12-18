import { Link } from "react-router-dom";

export function Contribute(): JSX.Element {
  return (
    <section
      id="create"
      className="w-full grid grid-cols-1 md:grid-cols-2 min-h-[80vh] items-center justify-items-center"
    >
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-3xl md:text-5xl text-center">
          <span className="text-primary font-bold scale-105">Contribute</span>{" "}
          by providing the resources the projects need. Your{" "}
          <span className="text-primary font-bold">help</span> will make a
          difference
        </h1>
        <Link className="btn btn-primary my-4" to={"/explore"}>
          Donate
        </Link>
      </div>
      <div className="flex justify-center">
        <img
          src={"/images/contribute.webp"}
          alt="hero"
          width={500}
          height={500}
          className="w-[70%]"
        />
      </div>
    </section>
  );
}
