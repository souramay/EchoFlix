import { VscLoading } from "react-icons/vsc";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
     <span className="loading loading-infinity loading-xs"></span>
<span className="loading loading-infinity loading-sm"></span>
<span className="loading loading-infinity loading-md"></span>
<span className="loading loading-infinity loading-lg"></span>
<span className="loading loading-infinity loading-xl"></span>
    </div>
  );
}