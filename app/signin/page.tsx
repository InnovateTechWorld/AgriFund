'use client'
import React, { useState } from "react";
import signIn, { signInWithGoogle } from "@/firebase/auth/signin";
import { useRouter } from 'next/navigation'

function SignInPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter()

    const handleSignIn = async () => {
        const user = await signInWithGoogle();
    }

    const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true);


        const { user, error } = await signIn(email, password);

        if (error) {
            console.log('Error')
            console.log(error)
            return router.push("/")
        }

        setLoading(false); // Stop the loading spinner after the attempt

        // else successful
        console.log(user)

        return router.push("/get-started")

    }
    return (
        <div className="wrapper m-auto flex flex-col justify-center items-center ">
            <div className="form-wrapper w-1/2 h-fit bg-white rounded-3xl p-8 ">
                <h1 className="mt-5 text-center font-bold text-4xl text-black">Login</h1>
                <form onSubmit={handleForm} className="form flex flex-col gap-4 text-black py-6 w-full">
                    <label htmlFor="email" className="w-full flex flex-col gap-2">
                        <p className="text-lg text-left">Email</p>
                        <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" className="bg-white p-2 border rounded-lg" />
                    </label>
                    <label htmlFor="password" className="w-full flex flex-col gap-2">
                        <p className="text-lg text-left">Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} required type={showPassword ? "text" : "password"} name="password" id="password" placeholder="password" className="bg-white p-2 border rounded-lg" />
                    </label>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="showPassword"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                            className="mr-1 bg-white text-white"
                        />
                        <label htmlFor="showPassword" className="text-sm">
                            Show Password
                        </label>
                    </div>
                    <button type="submit" className="w-full bg-primary rounded-lg p-3 text-white font-bold text-xl">Login</button>

                </form>

                <div className="text-sm text-center font-bold text-black mb-4">OR</div>
                <div className="text-center">
                    <button onClick={handleSignIn} className=" bg-secondary text-white p-2 border rounded-lg w-full">Sign In with Google</button>
                </div>
            </div>
        </div>
    );
}

export default SignInPage;