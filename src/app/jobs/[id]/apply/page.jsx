"use client";

import { useState } from "react";

import ApplyProgress from "@/components/apply/ApplyProgress";

import PersonalStep from "@/components/apply/PersonalStep";
import ResumeStep from "@/components/apply/ResumeStep";
import QuestionsStep from "@/components/apply/QuestionsStep";
import ReviewStep from "@/components/apply/ReviewStep";
import SuccessStep from "@/components/apply/SuccessStep";

export default function ApplyPage() {
  const [step, setStep] =
    useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalStep />;

      case 2:
        return <ResumeStep />;

      case 3:
        return <QuestionsStep />;

      case 4:
        return <ReviewStep />;

      case 5:
        return <SuccessStep />;

      default:
        return null;
    }
  };

  return (
    <div
      className="
      max-w-4xl
      mx-auto
      py-20
      "
    >
      <h1
        className="
        text-5xl
        font-bold
        mb-10
        "
      >
        Apply For Job
      </h1>

      <ApplyProgress
        step={step}
      />

      <div
        className="
        rounded-3xl
        border
        border-white/10
        p-8
        "
      >
        {renderStep()}
      </div>

      {step < 5 && (
        <div
          className="
          flex
          justify-between
          mt-8
          "
        >
          <button
            onClick={() =>
              setStep(
                Math.max(1, step - 1)
              )
            }
          >
            Previous
          </button>

          <button
            onClick={() =>
              setStep(
                Math.min(5, step + 1)
              )
            }
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}