"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
User,
Mail,
Lock
} from "lucide-react";

export default function SignupForm(){

return(

<motion.div

initial={{opacity:0,y:80}}

animate={{opacity:1,y:0}}

transition={{duration:.8}}

className="

w-full

max-w-md

rounded-3xl

border

border-white/10

bg-white/5

backdrop-blur-3xl

p-10

"

>

<h1 className="text-4xl font-bold mb-10">

Create Account

</h1>

<div className="space-y-5">

<div className="relative">

<User className="absolute left-4 top-4"/>

<input

placeholder="Full Name"

className="w-full pl-14 py-4 rounded-xl bg-black/30"

/>

</div>

<div className="relative">

<Mail className="absolute left-4 top-4"/>

<input

placeholder="Email"

className="w-full pl-14 py-4 rounded-xl bg-black/30"

/>

</div>

<div className="relative">

<Lock className="absolute left-4 top-4"/>

<input

type="password"

placeholder="Password"

className="w-full pl-14 py-4 rounded-xl bg-black/30"

/>

</div>

<button

className="

w-full

bg-cyan-500

rounded-xl

py-4

hover:scale-105

transition

"

>

Create Account

</button>

<p className="text-center">

Already have account?

<Link

href="/login"

className="text-cyan-400 ml-2"

>

Login

</Link>

</p>

</div>

</motion.div>

)

}