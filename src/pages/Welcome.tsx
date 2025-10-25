import Button from "../components/Button"
import sonolawhite from "../assets/images/sonola-white.png"
import sonolavideo from "../assets/images/sonola-logo.mp4"
import { useNavigate } from "react-router-dom"
import { FadeIn } from '../components/Animations';
import { FadeInUp } from '../components/Animations';

const WelcomePage = () => {
    const navigate = useNavigate();

    return (
        <main className="lg:py-0 py-12 h-screen bg-[#FFFFFF0A] drop-shadow-[#00000033] inset-shadow-sm inset-shadow:[#FFFFFF66] dark:bg-bg-dark  w-full flex flex-col items-center justify-center ">
            <div className="lg:mx-auto lg:px-0 px-4 lg:w-3/4 h-full lg:h-3/4 overflow-hidden flex flex-col lg:flex-row rounded-3xl bg-[#FFFFFF66] dark:bg-[#00000066] dark:drop-shadow-none  drop-shadow-md drop-shadow-drop-shadow ">
                <div className="lg:order-1 order-2 text-black dark:text-white flex flex-col justify-between h-full p-4 lg:p-16 w-full lg:w-3/7">
                    <FadeIn>
                        <div className="flex flex-col gap-3">
                            <h1 className="text-4xl ">Welcome to Sonola</h1>
                            <p className="text-lg text-bg-dark dark:text-secondary-text font-light">With Sonola, making stand-out marketing content is as easy as a few clicks. Let’s get started!</p>
                        </div>
                    </FadeIn>

                    <div className="flex flex-col gap-4">
                       <FadeIn>
                            <div className="lg:block hidden bg-bg-foreground text-bg-dark dark:text-secondary-text dark:bg-bg-foreground-dark inset-shadow-none border border-transparent dark:border-border-dark dark:inset-shadow-xs drop-shadow-none dark:drop-shadow-xs dark:drop-shadow-neutral-700  dark:inset-shadow-neutral-700 p-4 rounded-xl w-fit">
                                <p className="font-light ">63% of marketers say creating engaging content consistently is their biggest challenge.</p>
                                <small className="font-light">Content Marketing Institute, 2022</small>
                            </div>
                       </FadeIn>

                        <FadeInUp>
                            <div className="flex lg:flex-row flex-col gap-2">
                                <div className="bg-bg-foreground dark:bg-bg-foreground-dark inset-shadow-none border border-transparent dark:border-border-dark dark:inset-shadow-xs drop-shadow-none dark:drop-shadow-xs dark:drop-shadow-neutral-700  dark:inset-shadow-neutral-700 p-4 items-center rounded-xl w-full lg:w-2/3 flex gap-2 flex-row">
                                    <div className="bg-blue-main/5 dark:bg-blue-main/15 inset-shadow-sm inner-shadow-inner-shadow-white rounded-xl p-1 h-2 basis-12 "></div>
                                    <div className="bg-blue-main/10 dark:bg-blue-main/20 inset-shadow-sm inner-shadow-inner-shadow-white rounded-xl p-1 h-2 basis-12"></div>
                                    <div className="bg-blue-main/15 dark:bg-blue-main/25 inset-shadow-sm inner-shadow-inner-shadow-white rounded-xl p-1 h-2 basis-12"></div>
                                    <div className="bg-blue-main/25 dark:bg-blue-main/35 inset-shadow-sm inner-shadow-inner-shadow-white rounded-xl p-1 h-2 basis-12"></div>
                                    <div className="bg-blue-main/35 dark:bg-blue-main/45 inset-shadow-sm inner-shadow-inner-shadow-white rounded-xl p-1 h-2 basis-12"></div>
                                    <div className="bg-blue-main inset-shadow-sm inner-shadow-inner-shadow-white rounded-xl p-1 h-2 basis-full"></div>
                                </div>
    
                                <div className="w-full lg:w-1/3">
                                    <Button fullWidth onClick={() => navigate('/dashboard')}>Next</Button>
                                </div>
                            </div>
                        </FadeInUp>
                    </div>
                </div>
                <div className="lg:order-2 order-1 lg:rounded-none rounded-t-3xl bg-[url(./assets/images/welcome-bg.png)]  w-full lg:w-4/7 h-full bg-cover bg-center flex justify-center items-center bg-no-repeat">
                    {/* <div className="h-full w-full bg-[url(assets/images/sonola-logo.png)] bg-center bg-cover opacity-40"></div> */}
                    <video loop autoPlay muted playsInline className="h-full w-full object-fill object-center object-no-repeat dark:opacity-75 opacity-20">
                        <source src={sonolavideo} type="video/mp4" />
                    </video>
                </div>
            </div>

            <img src={sonolawhite} alt="Sonola White" className="mt-5 lg:block hidden" />
        </main>
    )
}

export default WelcomePage