import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddVideos = () => {
    let thumbail = useRef(null)
    let title = useRef(null)
    let channel = useRef(null)
    let views = useRef(null)
    let navigate = useNavigate()
    let upload = (a)=>{
        a.preventDefault()  // prevent the pag from reloading
        let data={
            thumbnail:thumbail.current.value,
            title:title.current.value,
            channel:channel.current.value,
            view:views.current.value
        }
        fetch('http://localhost:4000/videos',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        alert('video upload successfully');
        navigate('/'); // navigating to different routers
    }
    return ( 
        <div className="addVideo">
            <form>
                <input ref={thumbail} type="url" placeholder="Enter the Thumbnail" />
                <input ref={title} type="text" placeholder="Enter the Title "/>
                <input ref={channel} type="text" placeholder="Enter the Channel"/>
                <input ref={views} type="text" placeholder="Enter the Views"/>
                <button onClick={upload} style={{height:"20px",width:"100px"}}>ADD</button>
            </form>
        </div>
     );
}
 
export default AddVideos;