"use client"


function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-6 lg:px-8">
            <div>
                <h2 className="text-white text-lg font-semibold mb-4">About us</h2>
                <p className="mb-4"> Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.</p>
            </div>

            <div>
                <h2 className="text-white text-lg font-semibold mb-4">Quicks Links</h2>
                <ul>
                    <li>
                        <a href= "#" className="hover:text-white transition-colors duration-300">
                            Home
                        </a>
                    </li>
                    <li>
                        < a href="#" className="hover:text-white transition-colors duration-300">
                        About</a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="hover:text-white transition-colors duration-300"
                        >
                            Courses
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="hover:text-white transition-colors duration-300"
                        >
                            Contact
                        </a>
                    </li>
                    
                </ul>
            </div>
            <div>
                <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-white transition-colors duration-300">
                        Facebook
                    </a>
                    <a href="#" className="hover:text-white transition-colors duration-300">
                        Twitter
                    </a>
                    <a href="#" className="hover:text-white transition-colors duration-300">
                        Instagram
                    </a>

                </div>
            </div>
            <div >
                <h2 className=" text-white text-lg font-semibold mb-4">Contact Us</h2>
                <p>Damak, Jhapa</p>
                <p>chiya bagan</p>
                <p>Email:info@musicscholl.com</p>
                <p>Phone:+977 9876543210</p>
            </div>

        </div>
        <p className="text-center text-xs pt-8">© 2026 Music School. All rights reserved.</p>

    </footer>
  )
}

export default Footer