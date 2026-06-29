"use client";

import { useRef, useState, useEffect } from "react";
import { UploadCloud, FileText, Trash2 } from "lucide-react";

export default function ResumeUpload() {
  const inputRef = useRef(null);

  const [resume, setResume] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("resumeInfo");

    if (saved) {
      setResume(JSON.parse(saved));
    }
  }, []);

  const handleFile = (file) => {
    if (!file) return;

    const allowed = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/msword",
    ];

    if (!allowed.includes(file.type)) {
      alert("Only PDF or DOCX allowed.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Maximum file size is 5MB.");
      return;
    }

    const info = {
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2),
      type: file.type,
      preview: URL.createObjectURL(file),
    };

    setResume(info);

    localStorage.setItem(
      "resumeInfo",
      JSON.stringify(info)
    );
  };

  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-slate-900/60 backdrop-blur-xl p-8">

      <h2 className="text-2xl font-bold mb-6">
        Resume
      </h2>

      {!resume ? (
        <div
          onClick={() => inputRef.current.click()}
          className="
          border-2
          border-dashed
          border-cyan-500/30
          rounded-3xl
          p-14
          text-center
          cursor-pointer
          hover:border-cyan-400
          transition
          "
        >
          <UploadCloud
            size={60}
            className="mx-auto text-cyan-400 mb-4"
          />

          <h3 className="text-xl font-semibold">
            Upload Resume
          </h3>

          <p className="text-gray-400 mt-3">
            PDF or DOCX • Max 5MB
          </p>

          <input
            ref={inputRef}
            type="file"
            hidden
            accept=".pdf,.doc,.docx"
            onChange={(e) =>
              handleFile(e.target.files[0])
            }
          />
        </div>
      ) : (
        <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-6">

          <div className="flex justify-between items-center">

            <div className="flex gap-4 items-center">

              <FileText
                size={42}
                className="text-cyan-400"
              />

              <div>

                <h3 className="font-semibold">
                  {resume.name}
                </h3>

                <p className="text-gray-400">
                  {resume.size} MB
                </p>

              </div>

            </div>

            <button
              onClick={() => {
                setResume(null);
                localStorage.removeItem("resumeInfo");
              }}
            >
              <Trash2 className="text-red-500" />
            </button>

          </div>

          <div className="mt-6 flex gap-4">

            <a
              href={resume.preview}
              target="_blank"
              className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition"
            >
              Preview
            </a>

            <button
              onClick={() => inputRef.current.click()}
              className="px-5 py-2 rounded-xl border border-cyan-500"
            >
              Replace
            </button>

          </div>

          <input
            ref={inputRef}
            type="file"
            hidden
            accept=".pdf,.doc,.docx"
            onChange={(e) =>
              handleFile(e.target.files[0])
            }
          />

        </div>
      )}
    </div>
  );
}