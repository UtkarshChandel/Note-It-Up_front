import { useRef, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import {  MicrophoneIcon } from "@heroicons/react/solid";
// import axios from "axios";


function Home() {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Browser is not Support Speech Recognition.
      </div>
    );
  }
  const handleListing = () => {
    setIsListening(true);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    });
  };
  const stopHandle = async () => {
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();

    // 'http://13.235.68.160:3300/api/processData'

    // let reqObj = {
    //   subject: "TEST",
    //   transcript: [transcript],
    // };

    // let reqResponse = await axios.post(
    //   "http://13.235.68.160:3300/api/processData",
    //   reqObj
    // );

    // console.log(reqResponse.data);
  };
  const handleReset = () => {
    stopHandle();
    resetTranscript();
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-3/4 bg-center bg-no-repeat bg-cover min-w-full bg-gray-200">
      <h1 className="font-bold font-body text-2xl">Note It Up 📓</h1>
      <div className="flex items-center font-body min-w-lg gap-10">
        <div
          className="flex justify-center cursor-pointer text-center items-center bg-primary rounded-full p-3 mt-9 active:shadow-sm hover:shadow-lg focus:outline-none focus:ring focus:ring-white  text-white"
          ref={microphoneRef}
          onClick={handleListing}
        >
          <MicrophoneIcon className="h-10 w-7 mr-2 text-white cursor-pointer" />

          {isListening ? "Listening........." : "Click to start Listening"}
        </div>

        {isListening && (
          <button
            className="flex justify-center text-center items-center bg-red-500 rounded-full p-3 mt-9 active:shadow-sm hover:shadow-lg focus:outline-none focus:ring focus:ring-white  text-white"
            onClick={stopHandle}
          >
            Stop
          </button>
        )}
      </div>
      {transcript && (
        <div className="flex flex-col mt-10 font-body bg-white h-full p-10 shadow-xl w-1/4">
          <div className="font-paragraph text-black">{transcript}</div>
          <button
            className="flex justify-center text-center items-center bg-primary rounded-full p-3 mt-9 active:shadow-sm hover:shadow-lg focus:outline-none focus:ring focus:ring-white  text-white"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
export default Home;
