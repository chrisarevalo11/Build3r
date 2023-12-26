import { FormValuesTypes } from "@/types";
import { handleDate, convertToUnixTime } from "@/utils";

type Props = {
  formValues: FormValuesTypes;
};

export default function Hypercert({ formValues }: Props): JSX.Element {
  const { projectName, bannerImage, logo, startDate, endDate, scopeTags } =
    formValues;

  const startUnixTime: number = convertToUnixTime(startDate);
  const endUnixTime: number = convertToUnixTime(endDate);

  const tags: string[] = scopeTags.split(",");

  const isValidURL = (url: string) => {
    const urlPattern = /^(https):\/\/[^ "]+$/;
    return urlPattern.test(url);
  };

  return (
    <div
      style={
        isValidURL(bannerImage)
          ? {
              backgroundImage: `url(${bannerImage})`,
            }
          : {}
      }
      className={`p-2 flex flex-col items-center rounded-3xl overflow-hidden justify-around
       gap-3 w-[250px] sticky lg:top-4 h-[330px] shadow-xl m-2
          ${
            isValidURL(bannerImage)
              ? `bg-no-repeat bg-center bg-cover`
              : "bg-gradient-to-b from-gray-800 to-gray-900"
          }
        `}
    >
      <div
        style={{
          backgroundColor: "#666",
          backgroundImage: `url(${logo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-12 h-12 bg-gray-600 rounded-full absolute top-6 left-4"
      ></div>
      <div className="text-center space-y-2 absolute inset-0 bg-gradient-to-b from-transparent to-black flex flex-col justify-end p-3">
        <h1 className="text-xl mt-2 font-bold border-b-[1px] border-solid border-gray-500 pb-3">
          {projectName}
        </h1>
        <div className="flex justify-evenly text-sm text-slate-400 border-b-[1px] border-solid border-gray-500 pb-3">
          <span>
            <span className="font-bold">From:</span>{" "}
            {startDate && handleDate(startUnixTime)}
          </span>
          <span>
            <span className="font-bold">To:</span>{" "}
            {endDate && handleDate(endUnixTime)}
          </span>
        </div>
        <div className="flex justify-center flex-wrap gap-1 p-1">
          {scopeTags &&
            tags.map(
              (tag) =>
                tag && (
                  <div key={tag} className="badge badge-neutral">
                    {tag}
                  </div>
                )
            )}
        </div>
      </div>
    </div>
  );
}