

export default function GenButton(props: any){

    return(
        <a href={props.link} target="_blank" className="rounded-full bg-white p-2 m-2 mix-blend-screen flex items-center justify-center" title={props.name}>
            <img src={props.icon} alt={`${props.icon} logo`} className=" w-6 h-6 lg:w-8 lg:h-8" />
        </a>
    )
};