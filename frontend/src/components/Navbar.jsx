import React, { useEffect, useState } from 'react'
import { AlignJustify, CircleUserRound, LogIn, Menu, Search, User, X } from 'lucide-react'
import { Link } from 'react-router-dom';
import ModalBox from './ModalBox';



function Navbar() {
    const sales = 'Sles hewe jkdsfjrjhfsdff'
    const [active, setActive] = useState("home");
    const handleActive = (page) => {
        setActive(page);
    };
    const [scrollDirection, setScrollDirection] = useState("up");
    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setScrollDirection("down");
            } else {
                setScrollDirection("up");
            }
            lastScrollY = window.scrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [loading, setLoading] = useState(false)
    const user = false
    const [log, setLog] = useState(false);
    const [login, setLogin] = useState(false)
    const showModal = (type) => {
        setLogin(prev => !prev)
        if (type === 'login') {
            setLog(true)
        } else {
            setLog(false)
        }
    }

    const [menu, setMenu] = useState(false)
    const [loginMobile, setLoginMobile] = useState(false)
    const [mobileLogin, setMobileLogin] = useState(false)
    const [mobileSign, setMobileSign] = useState(false)
    const [mobileSearch, setMobileSearch] = useState(false)
    const mobileSearchToggle = () => {
        setMobileSearch(prev => !prev)
    }

    const [input, setInput] = useState({
        userName: "",
        email: "",
        password: "",
        avatar: "",
        role: ""
    })

    const inputHandle = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const submitLogin = async (e) => {
        e.preventDefault()
    }

    const submitSignup = async (e) => {
        e.preventDefault()
    }

    const submitLogout = async () => {

    }

    const deleteUser = async () => {

    }
    return (
        <div>
            {/* <nav className='w-full font-poppins h-10 shadow-sm p-2'>
                <div className='flex justify-between lg:justify-around'>
                    <span>{sales} </span>
                    <span><X /></span>
                </div>
            </nav> */}

            <nav className={`w-full h-12 lg:h-20 shadow-md z-10font-poppins p-3 lg:p-5 ${scrollDirection === "up" ? "fixed transition-all duration-1500" : ""}`}>
                {/* desktop */}
                <div className='hidden lg:flex justify-between'>
                    <div className='text-5xl'>R&B</div>
                    <div className='flex justify-between cursor-pointer'>
                        <div onClick={() => handleActive("home")} className={`px-4  hover:underline underline-offset-8 ${active === 'home' && 'text-2xl font-semibold'}`}><Link to='/'>Home</Link></div>
                        <div onClick={() => handleActive("men")} className={`px-4  hover:underline underline-offset-8 ${active === 'men' && 'text-2xl font-semibold'}`}><Link to='/men'> Men</Link></div>
                        <div onClick={() => handleActive("women")} className={`px-4  hover:underline underline-offset-8 ${active === 'women' && 'text-2xl font-semibold'}`}><Link to='/women'>Women</Link></div>
                        <div onClick={() => handleActive("child")} className={`px-4  hover:underline underline-offset-8 ${active === 'child' && 'text-2xl font-semibold'}`}>Child</div>
                    </div>
                    <div className='flex justify-between cursor-pointer'>
                        <div><input className='border-2 py-1 rounded-lg mr-2 mb-1' type="text" placeholder='Search... ' /></div>
                        {user ? (<div className="px-2 hover:underline underline-offset-8">Prfile</div>) : (<div className='flex flex-row'><div onClick={() => showModal("login")} className="px-2 hover:underline underline-offset-8">Login</div><div onClick={() => showModal("signup")} className="px-2  hover:underline underline-offset-8">Signup</div>
                        </div>)}
                    </div>
                </div>

                {/* mobile */}
                <div className='flex justify-between lg:hidden'>
                    <div className='flex flex-row'><span onClick={() => (setMenu(true))} className='mr-3'><AlignJustify size={28} /></span>
                        <span className='text-2xl'>R&B</span></div>
                    <div className='flex flex-row'><span onClick={mobileSearchToggle} className='mr-3'><Search size={28} /></span><span onClick={() => setLoginMobile(true)}><CircleUserRound size={28} /></span></div>
                </div>
            </nav>

            {/* destopOpertaion */}
            {
                login && <ModalBox width='600' height='500' onClose={() => setLogin(false)}>
                    {
                        log ? (<div className='w-[400px] mx-auto  mt-7'>
                            <h1 className='text-4xl font-semibold flex justify-center m-5 p-2'><span className='mt-2 mr-2'><LogIn size={32} /></span>Login</h1>
                            <form onSubmit={submitLogin}>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name='email'
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" " required onChange={inputHandle} />
                                    <label htmlFor="email"
                                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Email
                                    </label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="password" name='password'
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" " required onChange={inputHandle} />
                                    <label htmlFor="email"
                                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Password
                                    </label>
                                </div>
                                {
                                    loading ? (<button className='border w-full p-2 rounded-md text-2xl cursor-wait'>Wait a sec...</button>) : (<button type='submit' className='border w-full p-2 rounded-md text-2xl'>Login</button>)
                                }
                                <div className='mt-3'>Not have account? <span onClick={() => setLog(false)} className='text-blue-600 cursor-pointer'>Signup</span></div>
                            </form>
                        </div>) : (<div className=' mx-auto w-[400px] mt-8'>
                            <h1 className='text-4xl font-semibold flex justify-center m-5 p-2'><span className='mt-2 mr-2'><User size={32} /></span>Sign up</h1>
                            <form onSubmit={submitSignup}>
                                <div className="relative z-0 w-full mb-4 group">
                                    <input type="text" name='userName'
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" " required onChange={inputHandle} />
                                    <label htmlFor="userName"
                                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Name
                                    </label>
                                </div>
                                <div className="relative z-0 w-full mb-4 group">
                                    <input type="text" name='email'
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" " required onChange={inputHandle} />
                                    <label htmlFor="email"
                                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Email
                                    </label>
                                </div>
                                <div className="relative z-0 w-full mb-4 group">
                                    <input type="password" name='password'
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" " required onChange={inputHandle} />
                                    <label htmlFor="email"
                                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Password
                                    </label>
                                </div>
                                {loading ? (<button className='border w-full p-1 rounded-md text-2xl cursor-wait'>Wait a sec ...</button>) : (<button type='submit' className='border w-full p-1 rounded-md text-2xl'>Signup</button>)}
                                <div className='mt-3'>Not have account? <span onClick={() => setLog(true)} className='text-blue-600 cursor-pointer'>Login</span></div>
                            </form>
                        </div>)
                    }
                </ModalBox>
            }

            {/* mobile options */}
            {
                menu && <div className='fixed inset-0 z-10 bg-white flex justify-center items-center w-[200px] h-[500px]'>
                    <ul>
                        <div onClick={() => {
                            handleActive("home")
                            setMenu(false)
                        }} className={`px-4  hover:underline underline-offset-8 text-3xl mb-3 ${active === 'home' && 'text-4xl font-semibold'}`}><Link to='/'>Home</Link></div>
                        <div onClick={() => {
                            handleActive("men")
                            setMenu(false)
                        }} className={`px-4  hover:underline underline-offset-8 text-3xl mb-3 ${active === 'men' && 'text-4xl font-semibold'}`}><Link to='/men'> Men</Link></div>
                        <div onClick={() => {
                            handleActive("women")
                            setMenu(false)
                        }} className={`px-4  hover:underline underline-offset-8 text-3xl mb-3 ${active === 'women' && 'text-2xl font-semibold'}`}><Link to='/women'>Women</Link></div>
                        <div onClick={() => {
                            handleActive("child")
                            setMenu(false)
                        }} className={`px-4  hover:underline underline-offset-8 text-3xl mb-3 ${active === 'child' && 'text-2xl font-semibold'}`}>Child</div>
                    </ul>
                </div>
            }

            {
                loginMobile && <div className='mt-32 fixed right-0 transform -translate-y-1/2 z-10 bg-white w-[200px] h-[500px] flex justify-center items-center'>
                    <div className='flex flex-col pt-20'><button onClick={() => setMobileLogin(true)} className='border-2 px-3 py-2 text-2xl rounded-lg mb-4 '>Login</button><button onClick={() => setMobileSign(true)} className='border-2 px-3 py-2 text-2xl rounded-lg mb-4'>Signup</button><button onClick={() => {
                        setMobileLogin(false)
                        setMobileSign(false)
                        setLoginMobile(false)
                    }} className='border-2 px-3 py-2 text-2xl rounded-lg '>Close</button></div>
                </div>
            }

            {
                mobileLogin && <div className='mt-32 fixed right-0 transform -translate-y-1/2 z-10 bg-white w-full h-[500px] flex justify-center items-center'>
                    <div className='w-[400px] mx-auto mt-32'>
                        <div onClick={() => setMobileLogin(false)} className='cursor-pointer'><X size={28} /></div>
                        <h1 className='text-4xl font-semibold flex justify-center m-3 p-2'><span className='mt-2 mr-2'><LogIn size={32} /></span>Login</h1>
                        <form >
                            <div className="relative z-0 w-[200px] mx-auto mb-6 group">
                                <input type="text" name='email'
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required onChange={inputHandle} />
                                <label htmlFor="email"
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Email
                                </label>
                            </div>
                            <div className="relative z-0 w-[200px] mx-auto mb-6 group">
                                <input type="text" name='password'
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required onChange={inputHandle} />
                                <label htmlFor="password"
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Password
                                </label>
                            </div>
                            {loading ? (<button className='border w-[200px] ml-20 p-1 rounded-md text-2xl cursor-wait'>Wait a sec ...</button>) : (<button type='submit' className='border w-[200px] ml-20 p-1 rounded-md text-2xl'>Login</button>)}
                            <div className='mt-3 ml-20'>Not have account? <span onClick={() => {
                                setMobileSign(true)
                                setMobileLogin(false)
                            }} className='text-blue-600 cursor-pointer'>Signup</span></div>
                        </form>
                    </div>
                </div>
            }

            {
                mobileSign && <div className='mt-32 fixed right-0 transform -translate-y-1/2 z-10 bg-white w-full h-[600px] flex justify-center items-center'>
                    <div className='w-[400px] mx-auto mt-32'>
                        <div onClick={() => setMobileSign(false)} className='cursor-pointer mt-5 ml-3'><X size={28} /></div>
                        <h1 className='text-4xl font-semibold flex justify-center m-3 p-2'><span className='mt-2 mr-2'><LogIn size={32} /></span>Signup</h1>
                        <form >
                            <div className="relative z-0 w-[200px] mx-auto mb-6 group">
                                <input type="text" name='userName'
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required onChange={inputHandle} />
                                <label htmlFor="userName"
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Name
                                </label>
                            </div>
                            <div className="relative z-0 w-[200px] mx-auto mb-6 group">
                                <input type="text" name='email'
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required onChange={inputHandle} />
                                <label htmlFor="email"
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Email
                                </label>
                            </div>
                            <div className="relative z-0 w-[200px] mx-auto mb-6 group">
                                <input type="text" name='password'
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required onChange={inputHandle} />
                                <label htmlFor="password"
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Password
                                </label>
                            </div>
                            {loading ? (<button className='border w-[200px] ml-20 p-1 rounded-md text-2xl cursor-wait'>Wait a sec ...</button>) : (<button type='submit' className='border w-[200px] ml-20 p-1 rounded-md text-2xl'>Signup</button>)}
                            <div className='mt-3 ml-20'>Not have account? <span onClick={() => {
                                setMobileSign(false)
                                setMobileLogin(true)
                            }} className='text-blue-600 cursor-pointer'>Login</span></div>
                        </form>
                    </div>
                </div>
            }

            {
                mobileSearch && <div className='mt-16 fixed right-10 transform -translate-y-1/2 bg-opacity-30 backdrop-blur-md flex justify-center items-center'><div className='w-[200px] h-[30px] flex justify-center'><input className='px-2 py-1 border-2 rounded-lg' type="text" placeholder='Search..' /></div></div>
            }
        </div >
    )
}

export default Navbar