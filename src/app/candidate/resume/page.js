"use client";

import { useState, useEffect } from "react";

export default function ResumePage() {
  const [resume, setResume] = useState(null);

  const [candidate, setCandidate] = useState({
    fullName: "",
    email: "",
    phone: "",
    skills: "",
    experience: "",
    education: "",
    linkedin: "",
    github: "",
    portfolio: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("candidateResume");

    if (data) {
      setCandidate(JSON.parse(data));
    }
  }, []);

  function uploadResume(e) {
    const file = e.target.files[0];

    if (!file) return;

    setResume(file.name);
  }

  function saveResume() {
    const payload = {
      ...candidate,
      resume,
      uploadedAt: new Date().toLocaleString(),
    };

    localStorage.setItem(
      "candidateResume",
      JSON.stringify(payload)
    );

    alert("Resume Submitted Successfully");
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-8">

      <h1 className="text-4xl font-bold mb-8">
        Resume Builder
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        <input
          placeholder="Full Name"
          value={candidate.fullName}
          onChange={(e)=>
            setCandidate({
              ...candidate,
              fullName:e.target.value
            })
          }
          className="border rounded-xl p-4"
        />

        <input
          placeholder="Email"
          value={candidate.email}
          onChange={(e)=>
            setCandidate({
              ...candidate,
              email:e.target.value
            })
          }
          className="border rounded-xl p-4"
        />

        <input
          placeholder="Phone"
          value={candidate.phone}
          onChange={(e)=>
            setCandidate({
              ...candidate,
              phone:e.target.value
            })
          }
          className="border rounded-xl p-4"
        />

        <input
          placeholder="Skills"
          value={candidate.skills}
          onChange={(e)=>
            setCandidate({
              ...candidate,
              skills:e.target.value
            })
          }
          className="border rounded-xl p-4"
        />

        <textarea
          rows={5}
          placeholder="Experience"
          value={candidate.experience}
          onChange={(e)=>
            setCandidate({
              ...candidate,
              experience:e.target.value
            })
          }
          className="border rounded-xl p-4 col-span-2"
        />

        <textarea
          rows={5}
          placeholder="Education"
          value={candidate.education}
          onChange={(e)=>
            setCandidate({
              ...candidate,
              education:e.target.value
            })
          }
          className="border rounded-xl p-4 col-span-2"
        />

        <input
          placeholder="LinkedIn"
          value={candidate.linkedin}
          onChange={(e)=>
            setCandidate({
              ...candidate,
              linkedin:e.target.value
            })
          }
          className="border rounded-xl p-4"
        />

        <input
          placeholder="GitHub"
          value={candidate.github}
          onChange={(e)=>
            setCandidate({
              ...candidate,
              github:e.target.value
            })
          }
          className="border rounded-xl p-4"
        />

        <input
          placeholder="Portfolio"
          value={candidate.portfolio}
          onChange={(e)=>
            setCandidate({
              ...candidate,
              portfolio:e.target.value
            })
          }
          className="border rounded-xl p-4 col-span-2"
        />

      </div>

      <div className="mt-8">

        <label className="font-semibold">
          Upload Resume (PDF / DOCX)
        </label>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={uploadResume}
          className="mt-3 block"
        />

        {resume && (
          <p className="mt-3 text-green-500">
            Selected : {resume}
          </p>
        )}

      </div>

      <button
        onClick={saveResume}
        className="mt-8 bg-blue-600 px-8 py-4 rounded-xl"
      >
        Submit Resume
      </button>

    </div>
  );
}