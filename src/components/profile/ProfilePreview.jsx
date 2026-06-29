"use client";

import { useEffect, useState } from "react";

export default function ProfilePreview() {

  const [resume,setResume]=useState(null);

  useEffect(()=>{

      const data=localStorage.getItem("resumeInfo");

      if(data){
          setResume(JSON.parse(data));
      }

  },[]);

  return(

<div className="rounded-3xl bg-slate-900/60 border border-white/10 p-8">

<h2 className="text-2xl font-bold mb-6">
Profile Preview
</h2>

{resume && (

<div className="mt-6">

<p className="text-gray-400">
Resume
</p>

<p className="font-semibold">
{resume.name}
</p>

</div>

)}

</div>

  );

}