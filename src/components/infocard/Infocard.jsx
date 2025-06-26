import './infocard.css'

function Infocard(props) {
  console.log(props);
  
  return (
    <div className='lll'>
      <img src="./plyaj.png" alt="" />
                    <h2>{props.malumot}</h2>
                    <p>{props.yozuv}</p>
                    <button className='btn'>Read now</button>
    </div>
  )
}

export default Infocard
