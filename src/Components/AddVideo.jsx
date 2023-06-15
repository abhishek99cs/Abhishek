import { useRef } from "react";

const AddVideos = () => {
    let thumbail = useRef(null)
    let title = useRef(null)
    let channel = useRef(null)
    let views = useRef(null)
    let upload = (a)=>{
        a.preventDefault()  // prevent the pag from reloading
        let data={
            thumbail:thumbail.current.value,
            title:title.current.value,
            channel:channel.current.value,
            views:views.current.value
        }
        fetch('https://localhost:videos',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
    }
    return ( 
        <div className="addVideo">
            <form action="">
                <input ref={thumbail} type="url" placeholder="Enter the Thumbnail" />
                <input ref={title} type="text" placeholder="Enter the Title "/>
                <input ref={channel} type="text" placeholder="Enter the Channel"/>
                <input ref={views} type="text" placeholder="Enter the Views"/>
                <button onClick={upload}></button>
            </form>
        </div>
     );
}
 
export default AddVideos;