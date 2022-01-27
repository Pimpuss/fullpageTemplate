import Slide1 from '../components/Slide1';
import Slide2 from '../components/Slide2';
import Slide3 from '../components/Slide3';


const Page2 = () => {
    return (
        <div className="section2">
            <div className="slide">
                <Slide1 />
            </div>
            <div className="slide">
                <Slide2 />
            </div>
            <div className="slide">
                <Slide3 />
            </div>
        </div>
    )
}

export default Page2