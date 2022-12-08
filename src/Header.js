/*function Header() {
    return (
        <div className="flex w-full h-[10%] bg-blue-200">
            <img src="01lefts.jpeg" className="w-[1%] h-[4%] mt-4 ml-[16%]" />
            <img src="04searchicon.jpeg" className="w-[2%] h-[2%] mt-3 ml-[2%]" />
            <p className="ml-[1%] mt-7">sunday, 14 september 2022</p>
            <img src="a.svg" className="w-[16%] h-[4%] ml-[19%]" />
            <button class="bg-white text-blue-600 text-bold hover:bg-sky-200 w-[5%] h-[9%] ml-[25%] mt-6 border border-2xl">Login</button>
            <p className="ml-[25%] mt-7"><span className="font-bold">English</span> Edition</p>
        </div>
    );
}

export default Header;
*/

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
