import logochrome from './logochrome.svg'
import bgdots from './bgdots.svg'
import logoopera from './logoopera.svg'
import logofirefox from './logofirefox.svg'

const DownloadCard = () => {
    return (
        <section className="py-20 mt-20">
            {/* heading */}
            <div className="sm:w-3/4 lg:w-512 mx-auto px-2">
                {/* heading */}
                <h1 className="text-3xl text-center text-bookmark-blue">Doenload the Extension</h1>
                <p className="text-center text-bookmark-grey mt-4">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmark sync between your favourite devices, so you can access them on the go.</p>
            </div>
            {/* cards */}
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
                {/* card-1 */}
                <div className="flex flex-col rounded-md shadow-md lg:mb-16">
                    <div className="p-6 flex flex-col items-center">
                        <img src= {logochrome} alt="" />
                        <h3 className="mt-5 mb-2 text-bookmark-eblue txt-lg">Add to chrome</h3>
                        <p className="mb-2 text-bookmark-grey font-light">minimum version 62</p>
                    </div>
                    <div>
                        <img src = {bgdots}/>
                    </div>
                    {/* <hr className="border-b text-3xl border-bookmark-white border-dotted"/> */}
                    <div className="flex p-6">
                        <button type="button" className="flex-1 btn btn-purple border-2 border-bookmark-purple hover:bg-bookmark-white hover:text-bookmark-purple hover:border-bookmark-purple">
                            Add & Install Extensions
                        </button>
                    </div>
                </div>
                {/* card-2 */}
                <div className="flex flex-col rounded-md shadow-md lg:my-8">
                    <div className="p-6 flex flex-col items-center">
                        <img src= {logofirefox} alt="" />
                        <h3 className="mt-5 mb-2 text-bookmark-eblue txt-lg">Add to firefox</h3>
                        <p className="mb-2 text-bookmark-grey font-light">minimum version 62</p>
                    </div>
                    <div>
                        <img src = {bgdots}/>
                    </div>
                    {/* <hr className="border-b text-3xl border-bookmark-white border-dotted"/> */}
                    <div className="flex p-6">
                        <button type="button" className="flex-1 btn btn-purple border-2 border-bookmark-purple hover:bg-bookmark-white hover:text-bookmark-purple hover:border-bookmark-purple">
                            Add & Install Extensions
                        </button>
                    </div>
                </div>
                {/* card-3 */}
                <div className="flex flex-col rounded-md shadow-md lg:mt-16">
                    <div className="p-6 flex flex-col items-center">
                        <img src= {logoopera} alt="" />
                        <h3 className="mt-5 mb-2 text-bookmark-eblue txt-lg">Add to opera</h3>
                        <p className="mb-2 text-bookmark-grey font-light">minimum version 62</p>
                    </div>
                    <div>
                        <img src = {bgdots}/>
                    </div>
                    {/* <hr className="border-b text-3xl border-bookmark-white border-dotted"/> */}
                    <div className="flex p-6">
                        <button type="button" className="flex-1 btn btn-purple border-2 border-bookmark-purple hover:bg-bookmark-white hover:text-bookmark-purple hover:border-bookmark-purple">
                            Add & Install Extensions
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default DownloadCard
