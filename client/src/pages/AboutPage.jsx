import ContentPage from "../components/ContentPage";

export default function AboutPage() {
    return (
        <ContentPage>
            <div className="text-2xl lg:text-5xl animate-up-float">About Kicks</div>
            <p>Hey! My name is <span className="text-blue-500 hover:text-blue-700"><a href="https://www.ashishthomas.dev/" target="_blank" rel="noopener noreferrer">Ashish ↗</a></span> and I built <span className="text-orange-500 font-bold">Kicks.</span></p>
            <div className="lg:grid lg:grid-cols-3 gap-x-10 pt-5 fade-in text-center">
                <div>
                    <h1 className="font-bold text-2xl pt-[15rem] lg:pt-[3rem]">What this?</h1>
                    <div className="w-[20rem] pt-5">
                        <p><span className="text-orange-500 font-bold ">Kicks</span> is an application I built to provide a start to the <span className="text-orange-400 font-bold ">functional apparel </span> buying process. By pointing users in a direction based on their preferences, I'm able to simplify that initial difficulty of finding apparel for someone's specific usecase. Whether it's for sports, outdoor activity, or casual wear, I wanted people to have a tool to start their purchase journey with.</p>
                    </div>
                </div>

                <div>
                    <h1 className="font-bold text-2xl pt-[3rem]">Why this?</h1>
                    <div className="w-[20rem] pt-5">
                        <p>Why use <span className="text-orange-500 font-bold ">Kicks</span> instead of just doing a web search for shoes? The ability to <span className="text-orange-400 font-bold ">set preferences </span> and see <span className="text-orange-400 font-bold ">real-time prices </span> from different shoe seller sites all in one go makes this better than a web search. <span className="text-orange-500 font-bold ">Kicks</span> is able to give your preferences a weightage that provides the best results across different types of equipment.</p>
                    </div>
                </div>

                <div>
                    <h1 className="font-bold text-2xl pt-[3rem]">How this?</h1>
                    <div className="w-[20rem] py-5">
                        <p>With recommendations powered through the <span className="text-orange-400 font-bold ">Llama 3.1-8B LLM</span> and a <span className="text-orange-400 font-bold ">custom-built API</span> for shoe price retrieval, there are multiple working parts behind this application. Check out how I built this <span className="text-orange-300 hover:text-orange-500"><a href="https://github.com/AshishT558/Kicks-App" target="_blank" rel="noopener noreferrer">here</a></span>.</p>
                    </div>
                </div>
            </div>
        </ContentPage>
    )
}