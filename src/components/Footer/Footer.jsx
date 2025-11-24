import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        setEmail("")
    }
    return (
        <footer className='bg-gray-900 text-gray-300'>
            <div data-aos='fade-up' className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4  justify-between px-5 md:px-20 py-5 space-x-5'>
                {/* Company Logo */}
                <div className='space-y-1'>
                    <Link to='/'>
                        <img className='cursor-pointer h-12' src="/icons/footer-logo.png" alt="Logo" />
                    </Link>
                    <p className='text-sm'>Ecommerce is a free UI Kit from Paperpillar that you</p>
                    <div className='flex flex-col gap-2'>
                        <form onSubmit={handleLogin}>
                            <input className='text-sm border border-gray-400 rounded-full fit px-2 py-1' type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} placeholder='Type your email' />
                            <button type='submit' className='mt-2 ml-2 px-4 py-1 w-fit bg-gray-200 text-black rounded-full cursor-pointer'>subscribe</button>
                        </form>
                    </div>
                </div>

                {/* Social Link */}
                <div className='flex flex-col space-y-1'>
                    <h3 className='text-xl font-bold text-white'>Account</h3>
                    <Link to="/editprofile" className='hover:text-blue-600' >My Account</Link>
                    <Link to="/register" className='hover:text-blue-600' >Register</Link>
                    <Link to="/favorite" className='hover:text-blue-600' >Favorite</Link>
                    <Link to="/cart" className='hover:text-blue-600' >Cart</Link>
                </div>

                {/* Privacy policy Link Button*/}
                <div className='flex flex-col items-start space-y-1'>
                    <h3 className='text-xl font-bold text-white'>Quick Links</h3>
                    <button onClick={() => navigate('/privacypolicy')} className='cursor-pointer hover:text-blue-600'>Privacy Policy</button>
                    <button onClick={() => navigate('/termcondition')} className='cursor-pointer hover:text-blue-600'>Terms & Condition</button>
                    <button onClick={() => navigate('/faqs')} className='cursor-pointer hover:text-blue-600'>FAQs</button>
                    <button onClick={() => navigate('/contact')} className='cursor-pointer hover:text-blue-600'>Contact</button>
                </div>

                {/* Catagoris Link button*/}
                <div className=' space-y-1'>
                    <h3 className='text-xl font-bold text-white'>Support</h3>
                    <div className='space-y-1'>
                        <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                        <p>exclusive@gmail.com</p>
                        <p>+88015-88888-9999</p>
                    </div>
                </div>
                {/* Download App */}
                <div className=' space-y-2'>
                    <h3 className='text-xl font-bold text-white'>Download App</h3>
                    <div className='space-y-2 flex gap-2'>
                        <img className='cursor-pointer' src="/icons/qr-code.png" alt="Logo" />
                        <div className='flex flex-col gap-3'>
                            <img className='cursor-pointer ' src="/icons/paly-store.png" alt="Logo" />
                            <img className='cursor-pointer ' src="/icons/google-Play.png" alt="Logo" />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <FaFacebook className='hover:scale-125 hover:text-blue-600 duration-300 cursor-pointer' />
                        <FaTwitter className='hover:scale-125 hover:text-blue-600 duration-300 cursor-pointer' />
                        <FaInstagram className='hover:scale-125 hover:text-blue-600 duration-300 cursor-pointer' />
                        <FaLinkedin className='hover:scale-125 hover:text-blue-600 duration-300 cursor-pointer' />
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;
