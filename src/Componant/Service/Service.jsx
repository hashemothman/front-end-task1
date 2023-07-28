import './ServiceStyle.css';

const Service = (props) => {
  return (
    <div className={(props.reverce)? "card reverce":"card"}>
        <img src={props.image} alt=""  width={400} height={250}/>
        <div className='card-info'>
            <h4>{props.title}</h4>
            <p>{props.dis}</p>
        </div>
    </div>
  )
}

export default Service