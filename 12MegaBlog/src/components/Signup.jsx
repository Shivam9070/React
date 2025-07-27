import React,{useState} from 'react'
import authService from '../appwrite/auth'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {Button, Input, Logo} from "./index"
import { useForm } from 'react-hook-form'
import { login } from '../store/authSlice'

function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()  
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")  

    const create =async(data) => {
        setError("")
        try {
            const session = await authService.create(data)
            if (session) {
                const userData = await authService.createAccount(data)
                if(userData){
                    const userData = await authService.getCurrentUser()
                    if(userData) dispatch(login(userData));
                    navigate("/")
                }
            }
        } catch (error) {
            setError(error.message)
        }
  return (
    <div className='flex items-center justify-center'><div className='{`mx-auto w-full max-w-lg bg-gray-100 p-10 border border-black/10`}'>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                            Don&apos;t have any account?&nbsp;
                            <Link
                                to="/signup"
                                className="font-medium text-primary transition-all duration-200 hover:underline"
                            >
                                Sign Up
                            </Link>
                </p>
                {erorro && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                            label="Name: "
                            placeholder="Enter your full name"
                            type="text"
                            {...register("name", {
                                required: true,
                            })}
                        />
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address",
                                }
                            })}
                         />
                         <Input 
                         label="Password"
                         type="enter your password"
                         placeholder="Enter your password"
                         {...register("password", {
                             required: true,
                         })}
                         />
                         <Button
                         type="submit"
                         className="w-full">
                         Create Account
                         </Button>

                    </div>
                </form>
        </div>
    </div>
  )
}
}

export default Signup