import axios from "axios";
import { useEffect, useState } from "react";
import SubjectListItem from "./Subject-List-Item";

function StudentHome() {
  const [subjectList, setSubjectList] = useState("loading");

  async function fetchSubjectListArray() {
    let reqRes = await axios.get("http://13.235.68.160:3300/api/subjectList");
    reqRes = reqRes.data;
    console.log(reqRes);
    setSubjectList(reqRes.response);
  }

  useEffect(() => {
    fetchSubjectListArray();
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-3/4 bg-center bg-no-repeat bg-cover min-w-full bg-gray-100">
        <div className="flex flex-col min-h-1/4 ml-8 mt-7  font-bod md:mx-20 md:my-20 lg:mx-32 lg:my-16 xl:my-16 xl:mx-60">
          <h1 className="text-3xl font-semibold text-primary font-body">
            Subjects
          </h1>
          <p className="text-black font-body">The knuggets from lectures</p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-4 lg:grid lg:grid-cols-4 lg:last:mr-0 lg:space-x-0 lg:gap-8">
            {subjectList != "loading" &&
              subjectList.map((subject) => (
                <SubjectListItem subject={subject.toLowerCase()} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentHome;
