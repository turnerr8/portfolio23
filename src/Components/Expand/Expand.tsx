import arrow from '../../Media/Images/arrow-upper-right.png'

export default function Expand(){
    return(
        <div className="rounded-full bg-glassy-white w-16 h-16 p-4 flex items-center justify-items-center cursor-pointer hover:bg-glassy-white-selected
         m-3  right-5 top-5 ">
            <img src={arrow} alt="arrow" className="w-full h-full" />
        </div>
    )
}