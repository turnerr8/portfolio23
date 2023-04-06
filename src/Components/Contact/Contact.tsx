import ContactButtons from "../../Util/ContactButtons"
import GenButton from "../Buttons/GenButton"
import Message from "../Buttons/Message"

export default function Contact(){

    return(
        <div className=" w-11/12 blue-yellow-gradient rounded-3xl p-4 text-left">
            <h1 className=" text-5xl font-bold text-white">Want to know more?</h1>
            <h3 className="text-3xl font-bold text-subheading-white">Reach out to me here!</h3>
            
            <div className="flex justify-around">
                <Message />

                <div className=" inline-flex justify-between w-1/2" >
                    {ContactButtons.map( (button:any) => {
                        return <GenButton{...button}></GenButton>
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}