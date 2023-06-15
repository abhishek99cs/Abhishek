import { useEffect, useState } from "react";
import '../Styles/video.css';
const Videos = () => {
    let [videos,setVideos] = useState([]);
    let[shorts,setShorts] = useState([]);

//Fetching only one data
useEffect(()=>{
        let fetchData = async()=>{
            let responce = await fetch('http://localhost:4000/videos');
            let data = await responce.json()
            setVideos(data);
        }
        fetchData();
}, []);
useEffect(() => {
    let fetchData = async () => {
        let response = await fetch('http://localhost:4000/shorts');
        let data = await response.json();
        setShorts(data);
    }
    fetchData();
},[])
    let removeVideo=(id,channel)=>{
        let result = videos.filter((x)=>x.id!==id)
        setVideos(result)
        alert(`${channel} got deleted`)
    }
    return ( 
        <div className="videos">
            <h1>Feature Videos</h1>
            <div className="videodata">
            {
                videos.map((data)=>{
                    return(
                        <div className="video">
                            <img src={data.thumbnail} alt="" />
                            <div className="videodetails">
                            <h4>{data.title}</h4>
                            <h5>{data.channel}</h5>
                            <h5>{data.view}</h5>
                            <button onClick={()=>removeVideo(data.id,data.channel)}>Remove</button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <div className="shorts">
                <h1>Shorts</h1>
                <div className="container">
                    {
                       shorts.map((data)=>{
                            return(
                                <div className="shortsdata">
                                    <img src={data.thumbnails} alt="" />
                                    <h4>{data.titles}</h4>
                                    <h6>{data.view}</h6>
                                </div>
                            )
                       })
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Videos;