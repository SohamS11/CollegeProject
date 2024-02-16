import { BsDot } from "react-icons/bs";

const Courses = ({ data }) => {
  return (
    <>
      <div className="my-4">
        <div>
          <h1>Degree :</h1>
          <div className="flex flex-wrap gap-2">
            {data.degrees.map((item, index) => (
              <div
                key={index}
                className="text-sm border px-1 py-1 rounded-md flex items-center "
              >
                <BsDot className="text-2xl" /> <h1>{item.id}</h1>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1>Stream : </h1>
          <div className="flex flex-wrap gap-2">
            {data.streams.map((item, index) => (
              <div
                key={index}
                className="text-sm border px-1 py-1 rounded-md flex items-center"
              >
                <h1>{item}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
