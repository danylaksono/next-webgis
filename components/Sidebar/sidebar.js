import { 
  MdLayers, 
  MdPeopleAlt,
  MdCalculate,
  MdMap,
  MdHelp,
  MdOutlineFilterList
 } from "react-icons/md";

let checked = "";
function handleClick() {
  checked == "checked" ? (checked = "") : (checked = "checked");
}

export function SidebarComponent() {
  return (
    <div className="w-12 flex flex-col justify-between items-center flex-none text-white px-4 bg-black">
      <div className="flex flex-col space-y-4 w-full items-center pt-5">        
        <div className="rounded flex items-center justify-center duration-500 cursor-pointer">
        <div className="rounded-full flex items-center justify-center hover:bg-gray-400 w-8 h-8">
            <MdLayers className='w-6 h-6 hover:text-black'/>
          </div> 
        </div>
        <div className="rounded flex items-center justify-center duration-500 text-blue cursor-pointer">
        <div className="rounded-full flex items-center justify-center hover:bg-gray-400 w-8 h-8">
            <MdOutlineFilterList className='w-6 h-6 hover:text-black'/>
          </div> 
        </div>
        <div className="rounded flex items-center justify-center duration-500 text-blue cursor-pointer">
        <div className="rounded-full flex items-center justify-center hover:bg-gray-400 w-8 h-8">
            <MdCalculate className='w-6 h-6 hover:text-black'/>
          </div> 
        </div>
        <div className="rounded flex items-center justify-center duration-500 text-blue cursor-pointer">
        <div className="rounded-full flex items-center justify-center hover:bg-gray-400 w-8 h-8">
            <MdMap className='w-6 h-6 hover:text-black'/>
          </div> 
        </div>

      </div>
      <div className="flex flex-col space-y-4 pb-5">
        <div className="rounded flex items-center justify-center duration-500 text-blue cursor-pointer">
          <div className="rounded-full flex items-center justify-center hover:bg-gray-400 w-8 h-8">
            <MdHelp className='w-6 h-6 hover:text-black'/>
          </div> 
        </div>
        <div className="rounded flex items-center justify-center duration-500 text-center cursor-pointer">
          <div className="rounded-full flex items-center justify-center hover:bg-gray-400 w-8 h-8">
            <MdPeopleAlt className='w-6 h-6 hover:text-black'/>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default SidebarComponent;
