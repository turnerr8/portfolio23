import Message from "../Buttons/Message"
import ContactButtons from "../../Util/ContactButtons"
import GenButton from "../Buttons/GenButton"


export default function Bio(){
    return(
        <div className="basis-2/3 mx-3 text-left rounded-3xl bg-gray-800 p-6 blue-yellow-gradient p-4">
            <h1 className=" text-white font-bold text-6xl mb-3">Hey, I'm Ryan</h1>
            <h3 className=" text-subheading-white text-2xl font-bold my-4">Software Developer from Bellingham Washington</h3>
            <p className="text-subheading-white text-xl font-bold my-4">I graduated with a BS in Computer Science from Western Washington University and work on all things technology, including Full-Stack Web Development, Software Engineering, and Game Design.</p>
            <p className="text-subheading-white text-xl font-bold my-4">Check out some of my work below and reach out!</p>
            <div className="flex">
                <Message />
                {ContactButtons.map((curBut) => {
                    if(curBut.name== 'LinkedIn' || curBut.name == 'Resume' || curBut.name == 'Github'){
                        return <GenButton {... curBut} />
                    }
                })}
            </div>
        </div>
    )
}