import { Link } from "react-router-dom";

function News3() {
  return (
    <div className='flex w-full h-full justify-center '>
      <div className='w-2/12 h-full'></div>
      <div className='flex w-8/12 h-full '>
        <div className="flex flex-col w-3/12 h-full">
          <Link to="2nd"><p className="text-1xl hover:text-blue-600 font-bold mt-[20%]">Coronavirus Worldwide</p></Link>
          <img src="https://images.prothomalo.com/prothomalo-english%2Fimport%2Fmedia%2F2018%2F06%2F09%2F6fc02267b772eb63a23de0b42f790555-1.jpg?rect=179%2C0%2C1350%2C900&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.0" className="w-11/12 h-2/6 mt-5" />
          <p className="text-1xl hover:text-blue-600 font-bold mt-2">Bangladesh registers one death,<br />438 Covid cases in 24 hrs</p>
          <p className="mt-2">The number of detected coronavirus in the country, according to the governm,
            rose to 2,016,583 on Thursday as 438 more cases were reported</p>
          <p className="mt-10">8 minutes ago</p>
          <hr></hr>
        </div>
        <div className="flex flex-col w-3/12 h-full">
          <img src="https://images.prothomalo.com/prothomalo-english%2F2020-05%2F127aabea-6123-4658-9a6c-d7614fd9b2bd%2F2020_04_19T000000Z_1544851056_RC2W7G9ZPVO4_RTRMADP_3_HEALTH_CORONAVIRUS_PERU.JPG?rect=0%2C5%2C4992%2C3328&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.0" className="w-11/12 h-2/6 mt-[34%]" />
          <p className="text-1xl hover:text-blue-600 font-bold mt-2">Bangladesh registers one death,<br />438 Covid cases in 24 hrs</p>
          <p className="mt-2 ml-2">The number of detected coronavirus cases in the country, according to the government,
            rose to 2,016,583 on Thursday as 438 more cases were reported</p>
          <p className="mt-4">8 minutes ago</p>
          <hr></hr>
        </div>
        <div className="flex flex-col w-3/12 h-full">
          <img src="https://images.prothomalo.com/prothomalo-english%2F2022-09%2F9721b369-b8a3-4b72-95bd-118d736add58%2FCOV.webp?rect=1%2C0%2C800%2C533&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.0" className="w-11/12 h-2/6 h-2/6 mt-[34%]" />
          <p className="text-1xl hover:text-blue-600 font-bold mt-2">Bangladesh registers one death,<br />438 Covid cases in 24 hrs</p>
          <p className="mt-2 ml-2">The number of detected coronavirus cases in the country, according to the government,
            rose to 2,016,583 on Thursday as 438 more cases were reported</p>
          <p className="mt-4">8 hours ago</p>
          <hr></hr>
        </div>
        <div className="flex flex-col w-3/12 h-full">
          <img src="https://images.prothomalo.com/prothomalo-english%2F2022-02%2F7f06af40-f59c-4d5c-805b-2823bc5ed275%2FCovid_19_Vaccination.jpg?rect=0%2C0%2C3243%2C2162&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.0" className="w-11/12 h-2/6 h-2/6 mt-[34%]" />
          <p className="text-1xl hover:text-blue-600 font-bold mt-2">Bangladesh registers one death,<br />438 Covid cases in 24 hrs</p>
          <p className="mt-2 ml-2">The number of detected coronavirus cases in the country, according to the government,
            rose to 2,016,583 on Thursday as 438 more cases were reported</p>
          <p className="mt-4">8 minutes ago</p>
          <hr></hr>
        </div>
      </div>
      <div className='w-2/12 h-full'></div>
    </div>

  );
}

export default News3;
