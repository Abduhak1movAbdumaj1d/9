import './usercard.css'

function Usercard(props){
    console.log(props);
    



{
    return (
        <div className='.container'>
          
            <div className="ota">
                <div className="bola">
                    <img src="./qiz.png" alt="" />
                    <h2>{props.ism}</h2>
                    <p>{props.kasb}</p>
                    <p>{props.iwjoyi}</p>
                </div>
            </div>
        </div>
    )
}
}
export default Usercard
