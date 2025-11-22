import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
    const [fisrtName, setFisrtName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [massage, setMassage] = useState("")
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()

    const handelSubmit = (e) => {
        e.preventDefault()

        // Email Regex
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Empty field check
        if (!fisrtName || !email || !massage) {
            alert("Please fill all fields!");
            return;
        }
        // Email validation
        if (!regex.test(email)) {
            alert("Please enter a valid email!");
            return;
        }
        // LocalStorage Objects
        const contact = {
            Name: `${fisrtName} ${lastName}`,
            email,
            massage,
            date: new Date().toLocaleString()
        }
        // Save to LocalStorage
        const contacts = JSON.parse(localStorage.getItem("contact")) || [];
        contacts.push(contact)
        localStorage.setItem("contact", JSON.stringify(contacts))

        // Form Empty or Success massage
        setSuccess("Massage Sent Successfull!📩✅")
        setFisrtName("")
        setLastName("")
        setEmail("")
        setMassage("")
    }
    // Auto redirect login page after 3 seconds
    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                navigate('/')
            }, 3000);
            return () => clearTimeout(timer);
        }
    });

    return (
        <div>
            <div className='text-center -mt-15'>
                <h2 className='text-3xl font-bold text-center'>Contact</h2>
                <p className='mt-2'>We are available 24/7, 7 days a week.</p>
                <p className=''>Phone: +8801611112222</p>
            </div>
            <form onSubmit={handelSubmit}>
                <h3 className='text-xl text-center font-bold py-4'>Send a Message</h3>
                <div className='flex flex-col gap-5'>
                    <div className='flex gap-3'>
                        <input type="text" placeholder='Fisrt name' required value={fisrtName}
                            onChange={(e) => setFisrtName(e.target.value)} className='border border-gray-400 py-2 px-3 rounded-full w-full' />
                        <input type="text" placeholder='Last name' value={lastName}
                            onChange={(e) => setLastName(e.target.value)} className='border border-gray-400 py-2 px-3 rounded-full w-full' />
                    </div>
                    <input type="email" placeholder='Your mail' required value={email}
                        onChange={(e) => setEmail(e.target.value)} className='border border-gray-400 py-2 px-3 rounded-full' />
                    <textarea rows={4} placeholder='Description' required value={massage}
                        onChange={(e) => setMassage(e.target.value)} className='border border-gray-400 px-2 py-1 rounded'></textarea>
                    <button type='submit' className='bg-gray-800 hover:bg-gray-950 py-1 rounded-full text-white cursor-pointer'>Submit</button>
                </div>
            </form>
            {success && <p className="text-green-600 text-center font-semibold mt-3">{success}</p>}
        </div>
    )
}

export default Contact
