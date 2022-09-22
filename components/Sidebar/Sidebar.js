import MaplibreComponent from "../maps/maplibre.js";

let checked = "";
function handleClick() {
  checked == "checked" ? (checked = "") : (checked = "checked");
}

export function Sidebar({ isOpened }) {
  return (
    <div className="bg-green-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h7"
        />
      </svg>
      Sidebar
    </div>
  );
}

export default Sidebar;
