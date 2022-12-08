import { useParams } from 'react-router-dom';
import data from './data';
import News4 from './News4';

function FullPage() {
    const { id } = useParams();
    const {
        img1, p0, p1, p2, p3, p4, p5, p6, p7, p8, img2, img3, p9, p10, img4
    } = data[id];

    return (
        <div>
            <div className="flex w-fll h-full justify-center">
                <div className="w-2/12 h-full"></div>
                <div className="flex w-6/12 h-full">
                    <div className="flex flex-col w-full h-full">
                        <p className="text-2xl hover:text-red-600 font-bold mt-[4%] text-blue-600"><u>{p0}</u></p>
                        <p className='text-4xl mt-7'>{p1}</p>
                        <img src={img1} className='w-full h-full mt-[5%]' />
                        <p>{p2}</p>
                        <p className='mt-7'>{p3}</p>
                        <p className='mt-4'>{p4}</p>
                        <p>{p5}</p>
                        <p className='mt-4'>{p6}</p>
                        <img src={img2} className='w-4/12 h-2/6 mt-11 ml-[32%]' />
                        <p className='mt-11'>{p7}</p>
                        <p className='mt-4'>{p8}</p>
                        <img src={img3} className='w-4/12 h-2/6 mt-11 ml-[32%]' />
                        <p className='mt-11'>{p9}</p>
                        <p className='mt-4'>{p10}</p>
                        <img src={img4} className='w-full h-2/6 mt-11' />
                    </div>
                </div>
                <div className="w-4/12 h-full"></div>
            </div>
        </div>
    );
}

export default FullPage;













/*https://reactrouter.com/en/v6.3.0/getting-started/installation */