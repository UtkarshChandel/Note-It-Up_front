import { useHistory } from "react-router-dom";

function SubjectListItem({ subject }) {
  const history = useHistory();
  // lg:bg-red-400 md:bg-green-400 sm:bg-blue-400 xl:bg-yellow-400

  function handleClick() {
    history.push({
      pathname: "/student/tldr",
      subject: subject,
    });
  }

  return (
    <div
      className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-10 cursor-pointer"
      onClick={handleClick}
    >
      <div>
        <h2 class="text-textgray text-2xl font-semibold capitalize font-body">
          {subject || "Chemistry"}-subject
        </h2>
        <p class="mt-2 text-gray-600">See more</p>
      </div>
    </div>
  );
}

export default SubjectListItem;
