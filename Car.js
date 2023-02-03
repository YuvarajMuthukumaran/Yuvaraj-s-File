function Car(props){
    return(
    <div id="car">
        <p>Name : {props.name}</p>
        <p><img src="./public/Lamborgini.jpg"></img></p>
        <p>Name : {props.Model}</p>
        <p>Name : {props.Color}</p>
    </div>
    )
}
export default Car;