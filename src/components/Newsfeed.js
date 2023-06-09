import '../css/newsfeed.css'
import Linegraph from './Linegraph';
import TimeLine from './TimeLine';
import { Chip, Avatar } from '@mui/material';
import { useState } from 'react';
const Newsfeed = () => {

    const [popularTopics, setTopics] = useState([
        "Technology",
        "Top Movies",
        "Upcoming Earnings",
        "Crypto",
        "Cannabis",
        "Healthcare Supplies",
        "Index ETFs",
        "Technology",
        "Pharma",
      ]);

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
                        <TimeLine />
                    </div>
                </div>
                <div className="newsfeed__buying__section">
                    <h2>Buying Power</h2>
                    <h2>$4.11</h2>
                </div>
                <div className="newsfeed__market__section">
                    <div className="newsfeed__market__box">
                        <p>Markets closed</p>
                        <h1>happy holidays</h1>
                    </div>
                </div>
                <div className="newsfeed__popularlists__section">
                    <div className="newsfeed__popularlists__intro">
                        <h1>Popular List</h1>
                        <p>Show More</p>
                    </div>
                    <div className="newsfeed_popularlists_badges">
                        {popularTopics.map((topic, i) => (
                            <Chip 
                                key={i}
                                className="topic__bade"
                                variant="outlinded"
                                label={topic}
                                avatar={<Avatar
                                    src={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                                />} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed;