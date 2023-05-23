import '../css/newsfeed.css'
import Linegraph from './Linegraph';

const Newsfeed = () => {
    return(
        <div className="newsfeed">
            <div className="newsfeed__container">
                <div className="newsfeed__chartSection">
                    <div className="newsfeed__port">
                        <h1>$146,556</h1>
                        <p>+44.63 (+0.04%)</p>
                    </div> 
                    <div className="newsfeed__chart">
                        <Linegraph />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed;