type Tag ={
    name: string,
    color: string
}

export default function FullProject(props: any){
    return(
        <div id="filter" className=" fixed top-0 left-0 w-screen h-screen bg-filter flex flex-col-reverse items-center" onClick={props.closeFunction}>
            
            <div className=" w-11/12  bg-white rounded-3xl flex flex-col overflow-hidden" style={{borderRadius: '1.5em 1.5em 0 0', height: '95vh'}}>
            <div className=" rounded-full w-11 h-11 absolute bg-red-600 m-7 float-right" style={{transform: 'translateX(0px)'}}></div>
                <div className=" bg-center bg-cover bg-no-repeat h-96 flex flex-col" style={{backgroundImage: `url(${props.coverImage})`}}>
                </div>
                <h1>{props.title}</h1>
                    <h5>{props.date}</h5>
                    <p>{props.description}</p>
                    <div className="flex flex-row">
                    {props.tags.map((curtag:Tag) => {
                        return <span className=" inline-block rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 w-fit" style={{backgroundColor: `#${curtag.color}CC`}}> # {curtag.name}</span>
                    })}
                    </div>
            </div>
        </div>
    )
}