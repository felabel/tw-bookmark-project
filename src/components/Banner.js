import hero from './hero.svg'
const Banner = () => {
    return (
        <section className="relative">
            <div className="container flex flex-col-reverse lg:flex-row item-center gap-12 mt-14 lg:mt-28">
                {/* text div */}
                <div className="flex flex-1 flex-col item-center lg:items-start">
                    <h2 className="capitalize text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                        a simple bookmark manager
                    </h2>
                    <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
                        A clean and simple interface to organize your favourite websites. Open a new browser tab and see them load instantly. Try it for free.
                    </p>
                    <div className="flex justify-center flex-wrap gap-6">
                        <button type="button" className="btn btn-purple border-2 border-bookmark-purple hover:bg-bookmark-white hover:text-bookmark-purple hover:border-bookmark-purple">Get it on Chrome</button>
                        <button type="button" className="btn btn-white border-2 border-bookmark-white hover:bg-bookmark-purple hover:text-bookmark-white hover:border-bookmark-purple">Get it on Firefox</button>
                    </div>

                </div>
                {/* image div */}
                <div className="flex flex-1 justify center mb-10 md:mb-16 lg:mb-0 z-10">
                    <img src={hero} alt="" className="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full"/>
                </div>
                {/* // rounded background purple */}
                <div className="
                h-48 
                md:h-60 lg:h-60
                w-3/4 
                md:block 
                overflow-hidden
                bg-bookmark-purple 
                rounded-l-full 
                absolute 
                md:h-80 lg:h-80 
                md:w-1/4
                lg:w-2/5
                md:top-28
                lg:top-28
                top-10

                
                 right-0 
                lg:-bottom-28 
                ">
                    
                </div>

            </div>
            
        </section>
    )
}

export default Banner
