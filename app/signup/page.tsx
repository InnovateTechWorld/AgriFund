'use client'
import React, { useState } from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from 'next/navigation'
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Page() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validity, setValidity] = useState({
        hasLowercase: false,
        hasUppercase: false,
        hasNumber: false,
        isMinLength: false,
    });
    const [showValidation, setShowValidation] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter()

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);

        // Update validity
        setValidity({
            hasLowercase: /[a-z]/.test(value),
            hasUppercase: /[A-Z]/.test(value),
            hasNumber: /\d/.test(value),
            isMinLength: value.length >= 8,
        });
    };

    const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const { result, error } = await signUp(email, password);

        if (error) {
            console.log(error)
            return router.push("/")
        }

        // else successful
        console.log(result)
        return router.push("/get-started")
    }
    return (
        <div className="wrapper m-auto flex justify-center items-center ">
            <div className="form-wrapper w-1/2 h-fit bg-white rounded-3xl p-8 ">
                <h1 className="mt-5 text-center font-bold text-4xl text-black">Sign up</h1>
                <form onSubmit={handleForm} className="form flex flex-col gap-4 text-black py-6 w-full">
                    <label htmlFor="email" className="w-full flex flex-col gap-2">
                        <p className="text-lg text-left">Email</p>
                        <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" className="bg-white p-2 border rounded-lg" />
                    </label>
                    <label htmlFor="password" className="w-full flex flex-col gap-2">
                        <p className="text-lg">Password</p>
                        <input
                            onChange={handlePasswordChange}
                            onFocus={() => setShowValidation(true)}
                            onBlur={() => setShowValidation(false)} // Optional: hide message when input loses focus
                            required
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            placeholder="password"
                            className="bg-white p-2 border rounded-lg"
                        />
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
                    {showValidation && (
                        <div className="text-red-500 text-sm bg-gray-100 relative p-3 mt-2">
                            <h3>Password must contain the following:</h3>
                            <p className={validity.hasLowercase ? "text-green-500 flex items-center" : "text-red-500 flex items-center"}>
                                <span className="mr-2">{validity.hasLowercase ? "✔️" : "❌"}</span>A <b>lowercase</b> letter
                            </p>
                            <p className={validity.hasUppercase ? "text-green-500 flex items-center" : "text-red-500 flex items-center"}>
                                <span className="mr-2">{validity.hasUppercase ? "✔️" : "❌"}</span>A <b>capital (uppercase)</b> letter
                            </p>
                            <p className={validity.hasNumber ? "text-green-500 flex items-center" : "text-red-500 flex items-center"}>
                                <span className="mr-2">{validity.hasNumber ? "✔️" : "❌"}</span>A <b>number</b>
                            </p>
                            <p className={validity.isMinLength ? "text-green-500 flex items-center" : "text-red-500 flex items-center"}>
                                <span className="mr-2">{validity.isMinLength ? "✔️" : "❌"}</span>Minimum <b>8 characters</b>
                            </p>
                        </div>
                    )}
                    <button type="submit" className="w-full bg-primary rounded-lg p-3 text-white font-bold text-xl">Sign up</button>
                </form>

                <div className="flex justify-center mt-4 text-black">
                    <p className="text-sm flex flex-row gap-2">
                        Already have an account?{' '}
                        
                        <Link href="/signin">
                            <button className="flex flex-row gap-2 underline font-bold text-primary ">
                                Sign in
                                {/* <ArrowRight className="h-4 w-4" /> */}
                            </button>
                        </Link>
                    </p>
                </div>

            </div>
        </div>);
}

export default Page;