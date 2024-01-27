import StreamsItem from "../../Container/Home/StreamItem";
import { StreamsData } from "../../Data/StreamsData";

const Streams = () => {
  return (
    <div className=" my-4 px-2 flex flex-col w-full max-w-screen-lg lg:mx-auto mx-3">
      <div className=" text-left w-full max-w-screen-lg mb-4">
        <div>
          <h1 className="text-2xl font-bold">Explore your Future</h1>
          <span className="text-sm font-light">Select for College</span>
        </div>
        <hr />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {StreamsData.map((item, index) => {
          return <StreamsItem data={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Streams;
