import illustration1 from './illustration1.svg'
import illustration2 from './illustration2.svg'
import illustration3 from './illustration3.svg'
const Features = () => {
    return (
        <section className="bg-bookmark-white py-20 mt-20 lg:mt-40">
            <div className="sm:w-3/4 lg:w-512 mx-auto px-2">
                <h1 className="text-3xl text-center text-bookmark-blue">Features</h1>
                <p className="text-center text-bookmark-grey mt-4">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmark sync between your favourite devices, so you can access them on the go.</p>
            </div>

            {/* first feature */}
            <div className="relative mt-20 lg:mt-24">
                <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                    {/* image */}
                    <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                    <img  className="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full" src ={illustration1}/>

                    </div>
                    {/* content */}
                    <div className="flex flex-1 flex-col items-center lg:items-start mt-20">
                        <h1 className="text-3xl text-bookmark-blue">Bookmark in one click</h1>
                        <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                            Our simple drag and drop interface gives you complete control over how you manage your favourite sites.
                        </p>
                        <button type="button" className="btn btn-purple border-2 border-bookmark-purple hover:bg-bookmark-white hover:text-bookmark-purple hover:border-bookmark-purple">More Info</button>
                    </div>
                </div>
                {/* // rounded background purple */}
                <div className="
                h-60 w-1/4 
                md:w-2/4  lg:2/4
                my-4
                lg:block 
                overflow-hidden 
                bg-bookmark-purple 
                rounded-r-full 
                absolute 
                md:h-80 lg:h-80 
                md-w-1/4
                lg-w-1/4
                top-28 left-0 
                lg:-bottom-28  
                ">
                    
                </div>

            </div>
             {/* second feature */}
             <div className="relative mt-20 lg:mt-52">
                <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
                    {/* image */}
                    <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                    <img  className="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full" src ={illustration2}/>

                    </div>
                    {/* content */}
                    <div className="flex flex-1 flex-col items-center lg:items-start mt-20">
                        <h1 className="text-3xl text-bookmark-blue">Intelligent Search </h1>
                        <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                            Our simple drag and drop interface gives you complete control over how you manage your favourite sites.
                        </p>
                        <button type="button" className="btn btn-purple border-2 border-bookmark-purple hover:bg-bookmark-white hover:text-bookmark-purple hover:border-bookmark-purple">More Info</button>
                    </div>
                </div>
                {/* // rounded background purple */}
                <div className="
                h-60 w-1/4 
                md:w-2/4  lg:2/4
                my-4
                lg:block 
                overflow-hidden 
                bg-bookmark-purple 
                rounded-l-full 
                absolute 
                md:h-80 lg:h-80 
                md-:w-2/4
                lg-:w-2/4
                top-37 right-0 
                lg:-bottom-28  
                ">
                    
                </div>

            </div>

             {/* third feature */}
             <div className="relative mt-20 lg:mt-24">
                <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                    {/* image */}
                    <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                    <img  className="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full" src ={illustration3} />

                    </div>
                    {/* content */}
                    <div className="flex flex-1 flex-col items-center lg:items-start mt-20">
                        <h1 className="text-3xl text-bookmark-blue">Easy Sharing</h1>
                        <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                            Our simple drag and drop interface gives you complete control over how you manage your favourite sites.
                        </p>
                        <button type="button" className="btn btn-purple border-2 border-bookmark-purple hover:bg-bookmark-white hover:text-bookmark-purple hover:border-bookmark-purple">More Info</button>
                    </div>
                </div>
                {/* // rounded background purple */}
                <div className="
                h-60 w-2/4 
                md:w-2/4  lg:2/4
                my-4
                lg:block 
                overflow-hidden 
                bg-bookmark-purple 
                rounded-r-full 
                absolute 
                md:h-80 lg:h-80 
                
                top-37 left-0 
                lg:-bottom-28  
                ">
                    
                </div>

            </div>
        </section>
    )
}

export default Features
