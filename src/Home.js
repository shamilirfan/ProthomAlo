import News2 from './News2';
import News3 from './News3';
import Advertise2 from './Advertise2';
import News1 from './News1';
import News4 from './News4';
import News5 from './News5';


function Home() {
    return (
        <div>
            <News1 />
            <Advertise2 />
            <hr className='mt-11'></hr>
            <News2 />
            <hr></hr>
            <News3 />
            <News4 />
            <News5 />
        </div>
    );
}

export default Home;
