import Message from "../Buttons/Message"
import ContactButtons from "../../Util/ContactButtons"
import GenButton from "../Buttons/GenButton"


export default function Bio(){
    return(
        <div className="w-full text-left rounded-3xl bg-gray-800 p-8 blue-yellow-gradient flex-2" >

            <h1 className=" text-white font-bold text-4xl lg:text-6xl mb-10">Hey, I'm Ryan</h1>
            <h3 className=" text-subheading-white text-xl lg:text-2xl font-bold my-6">Software Developer from Bellingham Washington</h3>
            <p className="text-subheading-white text-base lg:text-xl font-bold my-4">I graduated with a BS in Computer Science from Western Washington University and work on all things technology, including Full-Stack Web Development, Software Engineering, and Game Design.</p>
            <p className="text-subheading-white text-base lg:text-xl font-bold mb-4 lg:mb-12">Check out some of my work below and reach out!</p>
            <div className="flex flex-wrap lg:flex-nowrap justify-around">
                <Message />
                <div className="flex justify-around w-full lg:w-1/2">
                    {ContactButtons.map((curBut) => {
                        if(curBut.name === 'LinkedIn' || curBut.name === 'Resume' || curBut.name === 'Github'){
                            return <GenButton {... curBut} />
                        }
                        
                    })}
                </div>
            </div>
        </div>
    )
}