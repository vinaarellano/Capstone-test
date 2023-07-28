import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


const Packages = () => {

	return (
		<div className="package">   
            <div className="PackageIntro">     
                <img src={require('./images/studio.jpg' )} alt=''/>
            </div>
            <div id="packagemenu">
                <h2>Rates</h2>
                <Button className="packageButton"
                        variant="contained" 
                        color="success" 
                        style= {{marginLeft:"250px",marginTop:"-80px",width:"120px",height:"45px"}}
                >
                <Link to='/login'>Book Now! </Link></Button>
                <ul>
                    <li>
                        <span className="Rate">Band rehearsal</span>
                        <span className="Price">₱300 per hour</span>
                        <span className="Description">Inclusion of 2 guitars, 1 bass guitar, 1 drumset.</span> 
                    </li>
                    <li>
                        <span className="Rate">Recording</span>
                        <span className="Price">₱600 per hour</span>
                        <span className="Description">This is live recording. All instruments recorded together.</span>  
                    </li>
                    <li>
                        <span className="Rate">Track recording</span>
                        <span className="Price">₱1200 per hour</span>
                        <span className="Description">Instruments and vocals are recorded individually.</span>  
                    </li>
                    <li>
                        <span className="Rate">Lessons</span>
                        <span className="Price">₱500 per hour</span>
                        <span className="Description">1-on-1 session for voice, guitar, bass, drums and piano lessons</span> 
                    </li>
                </ul>
            </div>
        </div>
	);
}


export default Packages;