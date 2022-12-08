import Advertise from './Advertise';
import Header from './Header';
import Header2 from './Header2';
import Navber from './Navber';

function Call() {
    return (
        <div>
            <Header />
            <Header2 />
            <hr className='mt-2'></hr>
            <Navber />
            <hr className='mt-2'></hr>
            <Advertise />
            <hr className='mt-4'></hr>
        </div>
    );
}
export default Call;