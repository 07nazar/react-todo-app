export default function App() {
  return (
    <div className="w-full flex items-center justify-center h-full">
      <div className="max-w-[1000px] w-full flex justify-center items-center flex-col bg-white  shadow-[0_0_4px_rgba(0,23,71,0.15)] rounded-[32px] pt-16 px-48 pb-12">
        <h1 className="text-[#11175E] text-5xl font-bold mb-8">Daily To Do List</h1>
        <div className="flex w-full relative mb-14 ">
          <input
            className="w-full placeholder:text-base p-5 ro focus:outline-none"
            type="text"
            placeholder="Add new list item"
          />
          <button className="absolute top-[50%] right-[7px] px-[24px] py-[12px] bg-blue-500 text-white text-lg translate-y-[-50%] ">
            Add
          </button>
        </div>
        <div className="flex flex-col">
          <p className="mb-9 text-[#001747] cursor-pointer">New list item</p>
          <p className="mb-9 text-[#001747] cursor-pointer">New list item (Hover)</p>
          <p className="mb-9 text-[#001747] cursor-pointer">New list item (Done)</p>
        </div>
        <hr className="mb-6" />
        <div className="w-full flex justify-between">
          <button className="text-[#B1BACB]">3 item selected</button>
          <button className="text-[#B1BACB]">Clear All</button>
        </div>
      </div>
    </div>
  )
}
