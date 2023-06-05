import { useState } from "react";
import '../Styles/video.css';
const Videos = () => {
    let [videos,setVideo] = useState([
            {
                thumnnail:"https://i.ytimg.com/vi/MAa_8XwAVlA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAG_mEcrdY-6sAIQzgCZ8FT9eX6lA",
                title:"Viduthalai Part 1 - Kaattumalli Video | Vetri Maaran | Ilaiyaraaja | Soori | Vijay Sethupathi",
                channel:"Sony Music South",
                views:"29M views"
            },
            {
                thumnnail:"https://i.ytimg.com/vi/sKEH4SXDmAE/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBXadlHjf6mzThutrExV6NxFB-VNw",
                title:"1st ODI | Highlights | Afghanistan Tour Of Sri Lanka | 2nd June 2023",
                channel:"Sony LIV",
                views:"3M views"
            },
            {
                thumnnail:"https://i.ytimg.com/vi/Y9QUCpohyck/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBlA19e6C_w6b6HOc7sBS9v8bnpAQ",
                title:"Month End Paavangal | Parithabangal",
                channel:"Parithabangal",
                views:"860K views"
            },
            {
                thumnnail:"https://i.ytimg.com/vi/jZ3xysL3fvs/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDraUkYRQIGTLxYz9aySY3hF_wsBQ",
                title:"ಡಿಗ್ರಿ ಡಿಪ್ಲೊಮಾ ಆದ ಯುವಕರಿಗೆ ಮೂರು ಸಾವಿರ ಡಿಗ್ರಿ ಡಿಪ್ಲೊಮಾ ಆದ ಯುವಕರಿಗೆ ಮೂರು ಸಾವಿರ । yuva nidhi by VINAY TV 2 days ago 1 minute, 24 seconds 38 views",
                channel:"VINAY TV",
                views:"38 views"
            },
            {
                thumnnail:"https://i.ytimg.com/vi/g59jFVCjsZ4/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDdMafH74oPkU6s533EAS6H6eYzfA",
                title:"Kuch Toh Bol Muh Toh Khol (Official Video) Akshay Kumar | Daulat Shohrat Kya Loge Tum B Praak by Chill Music 2 weeks ago 4 minutes, 1 second 5,845,220 views",
                channel:"Chill Music",
                views:"5.8M views"
            },
            {
                thumnnail:"https://i.ytimg.com/vi/EdftT8GMU1U/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAxTPCveWz700Bst6xXFBrtybXiOg",
                title:"O Bedardeya (Full Video) Tu Jhoothi Main Makkaar | Ranbir, Shraddha | Pritam,Arijit Singh, Amitabh B by T-Series 2 months ago 5 minutes, 24 seconds 79,258,294 views",
                channel:"T-Series",
                views:"79M views"
            },
            {
                thumnnail:"https://i.ytimg.com/vi/8EPJiFfWRfw/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDpvqoOVAWsC9Z5bFU0M-w7PZsJrg",
                title:"SatyaPrem Ki Katha|Official Trailer|Kartik|Kiara|Sameer V|Sajid Nadiadwala| Namah Pictures|29th June by NadiadwalaGrandson 5 hours ago 2 minutes, 36 seconds 5,383,237 views",
                channel:"NadiadwalaGrandson",
                views:"5.3M views"
            },
            {
                thumnnail:"https://i.ytimg.com/vi/t0Q2otsqC4I/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCVANFKKXmrdehkf7aM9issiuph5A",
                title:"Tom & Jerry | Tom & Jerry in Full Screen | Classic Cartoon Compilation | WB Kids by WB Kids 1 year ago 21 minutes 406,838,018 views",
                channel:"WB Kids",
                views:"406M views"
            },
            {
                thumnnail:"https://i.ytimg.com/vi/8sLS2knUa6Y/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAO0veWM9zL6aBUgSTcgeY365fApA",
                title:"Phir Aur Kya Chahiye| Zara Hatke Zara Bachke| Vicky K, Sara Ali K, Arijit Singh,Sachin-Jigar,Amitabh by Saregama Music 2 weeks ago 3 minutes, 36 seconds 56,246,329 views",
                channel:"Saregama Music",
                views:"56M views"
            },
            {
                thumnnail:"https://i.ytimg.com/vi/kPBsFYXmiUs/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDxj1VR-7dZeMF8pOmxZaoE6A0_VA",
                title:"RANGE ROVER or DEFENDER!! Finally Konsi Car Lere Hain😍 by Dimple Malhan Vlogs 1 day ago 11 minutes, 25 seconds 598,784 views",
                channel:"Dimple Malhan Vlogs",
                views:"598K views"
            },
            {
                thumnnail:"https://i.ytimg.com/vi/MUMCZZl9QCY/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAIyXtilu937GFpJsY6hbAxftz1rg",
                title:"हिंदी Oggy and the Cockroaches 🔧 KEYS & IDEAS 🔧 Hindi Cartoons for Kids by Oggy Hindi - हिन्दी 1 year ago 26 minutes 67,363,741 views",
                channel:"Oggy Hindi - हिन्दी",
                views:"67M views"
            },
            {
                thumnnail:"	https://i.ytimg.com/vi/400QfMKiCFs/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDxHYEpMOJCWECXAJ2qcVV1AzFNZQ",
                title:"YAAD TERI AAYE BAAR BAAR: Sourav Joshi Vlogs & Pooh In Korea | Saaj Bhatt, Sandeep Batraa | Sad Song by Voilà! Digi 8 hours ago 4 minutes, 4 seconds 931,405 views",
                channel:"Voilà! Digi",
                views:"931K views"
            }
        ])
    return ( 
        <div className="videos">
            <h1>Feature Videos</h1>
            <div className="videodata">
            {
                videos.map((data)=>{
                    return (
                        <div className="video">
                            <img src={data.thumnnail} alt="" />
                            <div className="videodetails">
                            <h3>{data.title}</h3>
                            <h4>{data.channel}</h4>
                            <h5>{data.views}</h5>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
     );
}
 
export default Videos;