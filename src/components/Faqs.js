import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
const Faqs = () => {
    return (
        <section className ="bg-bookmark-white py-20">
            <div className="container">
                <div className="sm:w-3/4 lg:w-512 mx-auto px-2">
                    {/* heading */}
                    <h1 className="text-3xl text-center text-bookmark-blue">Frequently Asked Questions</h1>
                    <p className="text-center text-bookmark-grey mt-4">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmark sync between your favourite devices, so you can access them on the go.</p>
                </div>

                {/* faq items */}
                <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
                    {/* faq items */}
                    <div className="flex items-center border-b py-4">
                        <span className="flex-1">What is a Bookmark?</span>
                        <FontAwesomeIcon icon={faChevronDown}  className="text-bookmark-purple"/>
                    </div>
                    <div className="flex items-center border-b py-4">
                        <span className="flex-1">How can I require a new browser</span>
                        <FontAwesomeIcon icon={faChevronDown}  className="text-bookmark-purple"/>
                    </div>
                    <div className="flex items-center border-b py-4">
                        <span className="flex-1">Is there a mobile app?</span>
                        <FontAwesomeIcon icon={faChevronDown}  className="text-bookmark-purple"/>
                    </div>
                    <div className="flex items-center border-b py-4">
                        <span className="flex-1">What about other Chromium browsers</span>
                        <FontAwesomeIcon icon={faChevronDown}  className="text-bookmark-purple"/>
                    </div>
                    <div className="flex items-center border-b py-4">
                        <span className="flex-1">What is a Bookmark?</span>
                        <FontAwesomeIcon icon={faChevronDown}  className="text-bookmark-purple"/>
                    </div>
                    <button type="button" className="mt-12 flex self-center btn btn-purple border-2 border-bookmark-purple hover:bg-bookmark-white hover:text-bookmark-purple hover:border-bookmark-purple">
                            More Info
                    </button>

                </div>
                
            </div>

        </section>
    )
}

export default Faqs
