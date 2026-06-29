"use client";

import { useState } from "react";

import ResumeTemplates from "@/components/resume/ResumeTemplates";
import ResumePreview from "@/components/resume/ResumePreview";
import ResumeForm from "@/components/resume/ResumeForm";

export default function ResumePage() {
  const [template, setTemplate] =
    useState("Modern");

  return (
    <div>
      <h1
        className="
        text-5xl
        font-bold
        mb-10
        "
      >
        Resume Builder
      </h1>

      <ResumeTemplates
        selected={template}
        setSelected={setTemplate}
      />

      <div
        className="
        grid
        lg:grid-cols-2
        gap-8
        mt-10
        "
      >
        <ResumeForm />

        <ResumePreview
          template={template}
        />
      </div>
    </div>
  );
}