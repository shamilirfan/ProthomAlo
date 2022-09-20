import { useParams } from 'react-router-dom';
import data from './data';
import News2 from './News2';
import News3 from './News3';

function FullPage() {
    const {id} = useParams();
    const {img , title} = data[id];

    return (
        <div>
            <div className="flex w-fll h-full justify-center">
                <div className="w-2/12 h-full"></div>
                <div className="flex w-6/12 h-full">
                    <div className="flex flex-col w-full h-full">
                    <p className='text-4xl mt-4'>{title}</p>
                    <img src={img} className='w-full h-full mt-[10%]' />
                    </div>

                </div>
                <div className="w-4/12 h-full"></div>
            </div>
        </div>
    );
}

export default FullPage;

















/*https://reactrouter.com/en/v6.3.0/getting-started/installation */