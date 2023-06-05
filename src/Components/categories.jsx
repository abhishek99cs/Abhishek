import '../Styles/categories.css'
const Categories = () => {
    let categories = [
        {link:"All"},
        {link:"HTML"},
        {link:"Music"},
        {link:"Movies"},
        {link:"Kids"},
        {link:"Blessings"},
        {link:"WebSeries"},
        {link:"Dhee"},
        {link:"CSS"},
        {link:"circket"}
    ]
    return ( 
        <div className="categories">
           <ul>
            {
                categories.map((data)=>{
                    return (
                        <li><a href="">{data.link}</a></li>
                    )
                })
            }
           </ul>
        </div>
     );
}
export default Categories;