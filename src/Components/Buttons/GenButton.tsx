

export default function GenButton(props: any){

    return(
        <a href={props.link} target="_blank" className="rounded-full bg-white p-2 m-2">
            <img src={props.icon} alt={`${props.icon} logo`} className=" w-8 h-8" />
        </a>
    )
};