import { useHistory } from "react-router-dom";

function TLDRListItem({ tldr }) {
  const history = useHistory();
  // lg:bg-red-400 md:bg-green-400 sm:bg-blue-400 xl:bg-yellow-400

  return (
    <div>
      {tldr && (
        <div className="max-w-md py-4 px-8 bg-white shadow-md rounded-lg my-10 cursor-pointer hover:shadow-lg">
          <div>
            {/* <h2 class="text-primary font-paragraph text-3xl font-semibold capitalize">
         
        </h2> */}
            <p class="mt-2 text-primary font-paragraph text-xl text-left">
              {" "}
              {tldr || "Short summary dsdsdsdsdsdsdsddsdsdsdsdsdsdsds"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TLDRListItem;
