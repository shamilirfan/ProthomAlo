function Header() {
    return (
        <div className='flex flex-row w-full h-[9%]'>
            <img src="01lefts.jpeg" className="w-[1%] h-[1%] mt-4 ml-[16%]" />
            <img src="04searchicon.jpeg" className="w-[2%] h-[2%] mt-4 ml-[1%]" />
            <img src="a.svg" className="w-[16%] h-[10%] ml-[22%]" />
            <img src="01notifacatioicon.jpeg" className="w-[1%] h-[1%] mt-7 ml-[15%]" />
            <button
                className="bg-white 
            text-blue-600 text-bold 
            hover:bg-sky-200 w-[5%] h-[7%] ml-7 mt-6 border border-2xl"
            >Login
            </button>
        </div>
    );
}

export default Header;
