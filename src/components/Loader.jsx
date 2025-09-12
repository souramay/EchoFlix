import { VscLoading } from "react-icons/vsc";

export default function Loader({ size = 60, color = "#FFFFFF" }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <VscLoading
        className="animate-spin opacity-80"
        size={size}
        color={color}
        aria-label="Loading"
        role="status"
      />
    </div>
  );
}