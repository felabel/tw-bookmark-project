import React from 'react'
import logomain from './logomain.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookF } from '@fortawesome/free-solid-svg-icons'
// import { faTwitter } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div>
            <section className="bg-bookmark-purple text-white py-20">
            <div className="container">
                <div className="sm:w-3/4 lg:w-2/4 mx-auto">
                    <p className="font-light uppercase text-center mb-8">35,000+ already joined</p>
                    <h1 className="text-3xl text-center">Stay up to date with what we are doing</h1>
                    <div className="flex flex-col sm:flex-row gap-6 mt-8">
                        <input type="text" placeholder="Enter your E mail" className="focus:outline-none text-bookmark-grey flex-1 px-2 py-2 rounded-md " />

                        <button type="button" className="btn bg-bookmark-red border border-bookmark-red hover:bg-bookmark-white hover:text-bookmark-red hover:border-bookmark-red">
                            Contact Us
                        </button>
                     </div>
                </div>
            </div>
        </section>
        <footer className="bg-bookmark-blue py-8">
            <div className="container flex flex-col md:flex-row items-center">
                {/* left footer */}
                <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
                    <img src={logomain} alt="" />
                    <ul className="flex text-white uppercase gap-12 text-xs ">
                        <li className="cursor-pointer hover:text-bookmark-red">Features</li>
                        <li className="cursor-pointer hover:text-bookmark-red">Pricing</li>
                        <li className="cursor-pointer hover:text-bookmark-red">Contact</li>

                    </ul>
                    
                </div>
                <div className="flex gap-10 mt-12 md:mt-0">
                        <li className="text-white text-2xl list-none"><FontAwesomeIcon icon={faTwitter} /></li>
                        <li className="text-white text-2xl  list-none"><FontAwesomeIcon icon={faFacebookSquare} /></li>
                </div>
            </div>

        </footer>
        </div>
        
    )
}

export default Footer
