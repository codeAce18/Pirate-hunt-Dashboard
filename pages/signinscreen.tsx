import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff, Mail, Lock } from 'lucide-react'; // Icons from lucide-react
import Image from 'next/image';
import "../app/globals.css";
import YourProfile from "../public/assets/YourProfile.png";
import Link from "next/link"

export default function SignInScreen() {

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle form submission logic
    };

    return (
        <div className="bg-[#000000] h-screen flex items-center justify-center">
            <div className="max-w-md w-full  bg-[#0B0D18] py-10 px-10 rounded-[27.98px] border-[1.13px] border-[#00A6DE] shadow-lg">
                <div className="flex justify-center mb-8">
                <Image src={YourProfile} alt="Profile Image" width={100} height={100} />
                </div>

                <div className='flex justify-center'>
                    <h1 className="text-white text-[30.4px] leading-[30.4px] font-bold">Sign in with email</h1>
                </div>

                <form onSubmit={handleSubmit}>
                {/* Email Field */}
                <div className="mb-6 pt-6">
                    <div className="relative">
                    <Mail className="absolute left-3 top-1/2 w-[17.73px] h-[15.2px] transform -translate-y-1/2 text-white" />
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="pl-10 pr-4 text-white py-6 w-full border rounded-[15.2px] focus:ring focus:ring-blue-500"
                        required
                    />
                    </div>
                </div>

                {/* Password Field */}
                <div className="mb-6">
                    <div className="relative">
                    <Lock className="absolute left-3 w-[17.73px] h-[15.2px] top-1/2 transform -translate-y-1/2 text-white" />
                    <Input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="pl-10 pr-12 py-6 text-white w-full border rounded-[15.2px] focus:ring focus:ring-blue-500"
                        required
                    />
                    {/* Toggle Visibility Icon */}
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                        {showPassword ? <Eye className="text-white w-[16.47px] h-[14.78px]" /> : <EyeOff className="text-white w-[16.47px] h-[14.78px]" />}
                    </button>
                    </div>

                    <Link href="/">
                        <div className='flex items-end justify-end'>
                            <p className='text-white text-[15.2px] leading-[30.4px] tracking-[0.15%] font-normal'>Forgot password?</p>
                        </div>
                    </Link>
                </div>

                

                {/* Get Started Button */}
                <Link href="/">
                    <Button type="submit" className="w-full bg-[#00A6DE] text-white p-6 rounded-[15.2px]">
                        Get started
                    </Button>
                </Link>
                </form>
            </div>
        </div>
    );
} 