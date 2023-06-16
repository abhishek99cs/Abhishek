import Ytlogo from '../images/youtube_logo.png';
import Alarm from '../images/alarm_alert_bell_notification_ring_icon_123294.png'
import Video from '../images/video_plus_icon_136058.png'
import '../Styles/navbar.css'
import { Link } from 'react-router-dom';
function Navbar() {
    return(
        <div className="navbar">
            <div className="logo"><img height={100} width={150} src={Ytlogo} alt="" /></div>
            <div className="searchbar"><input type="text" placeholder="Search"/></div>
            <div className="useroptions">
                <img height={40}width={40} src={Alarm} alt="" />
                <Link to={"/addVideos"}><img height={40}width={40} src={Video} alt="" /></Link>
                <h1>A</h1>        
            </div>
        </div>
    )
}
export default Navbar;