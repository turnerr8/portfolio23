type Tag ={
    name: string,
    color: string
}

export default function FullProject(props: any){
    return(
        <div id="filter" className=" z-40 fixed top-0 left-0 w-screen h-screen bg-filter flex flex-col-reverse items-center" onClick={props.closeFunction}>
            
            <div className=" w-11/12  bg-white rounded-3xl relative flex flex-col overflow-hidden" style={{borderRadius: '1.5em 1.5em 0 0', height: '95vh'}}>

                <div onClick={props.closeFunction} className=" close rounded-full w-14 h-14 p-1 absolute bg-glassy-white top-7 right-7 flex items-center justify-items-center cursor-pointer hover:bg-glassy-white-selected" style={{transform: 'translateX(0px)'}}>
                    <svg className="close"  clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
                </div>

                <div className=" bg-center bg-cover bg-no-repeat h-96 flex flex-col" style={{backgroundImage: `url(${props.coverImage})`}}></div>
                <h1>{props.title}</h1>
                <h5>{props.date}</h5>
                <p>{props.description}</p>
                <div className="flex flex-row">
                    {props.tags.map((curtag:Tag) => {
                        return <span className=" inline-block rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 w-fit" style={{backgroundColor: `#${curtag.color}CC`}}> # {curtag.name}</span>
                    })}
                </div>
                <a href={props.link} target="_blank">Visit</a>
            </div>
        </div>
    )
}