function News2() {
    return (
        <div className='flex w-full h-full justify-center '>
            <div className='w-2/12 h-full bg-red-400'></div>
            <div className='flex w-8/12 h-full bg-red-100'>
                <div className="flex flex-col w-3/12 h-full">
                    <p className="text-1xl hover:text-blue-600 font-bold mt-4 ml-4">Russia-Ukraine conflict</p>
                    <img src="https://images.prothomalo.com/prothomalo-english%2F2022-09%2Fcdd36cd2-6e07-4599-ad7e-15ed19d4b41a%2FEU_VONDERLEYEN_ENERGY_PIX.JPG?rect=0%2C0%2C5808%2C3872&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.0" className="w-11/12 h-2/6 mt-4 ml-4" />
                </div>
                <div className="flex flex-col w-3/12 h-full">
                    <p className="text-1xl hover:text-blue-600 font-bold mt-[17%] ml-3">EU backs away from Russian gas<br />price cap as members divided</p>
                    <p className="mt-3 ml-3">The European Union is set to unveil plans on Wednesday to skim off wind
                        profits from energy companies and impose cuts in electricity usage across the
                        bloc.Since Moscow abandoned its main bastion in the northeast on Saturday.</p>
                </div>
                <div className="flex flex-col w-3/12 h-full">
                    <p className="text-1xl hover:text-blue-600 font-bold mt-[17%] ml-3">Ukraine stabilises counter-<br />offensive gains, Biden sees<br />long haul</p>
                    <p className="mt-3 ml-3">Since Moscow abandoned its main bastion in the northeast on Saturday, marking
                        its worst defeat since the ear days of the war, Ukrainian troops have</p>
                </div>
                <div className="flex flex-col w-3/12 h-full">
                    <p className="text-1xl hover:text-blue-600 font-bold mt-[17%] ml-3">Dhaka and its neighbourhood<br />Gas crisis hits hard kitchens,<br />industries</p>
                    <p className="mt-3 ml-3">Titas Gas sources said complaints are being filed from almost all
                        areas of Dhaka while the most are coming from Mohammadpur, Mirpur, Paikpara.</p>
                    <div className="h-11"></div>
                </div>
            </div>
            <div className='w-2/12 h-full bg-red-400'></div>
        </div>

    );
}

export default News2;
