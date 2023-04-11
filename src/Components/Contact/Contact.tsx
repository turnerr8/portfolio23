import ContactButtons from "../../Util/ContactButtons"
import GenButton from "../Buttons/GenButton"
import Message from "../Buttons/Message"

export default function Contact(){

    return(
        <div className=" col-span-2 yellow-blue-gradient rounded-3xl p-8 text-left flex-1 ">
            <h1 className=" text-3xl lg:text-5xl font-bold text-white mb-4 lg:mb-10">Want to know more?</h1>
            <h3 className=" text-xl lg:text-3xl font-bold text-subheading-white mb-6 lg:mb-12">Reach out to me here!</h3>
            
            <div className="flex justify-around flex-wrap lg:flex-nowrap">
                <Message />

                <div className=" inline-flex justify-between w-full lg:w-1/2" >
                    {ContactButtons.map( (button:any) => {
                        return <GenButton{...button}></GenButton>
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}