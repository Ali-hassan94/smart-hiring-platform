import StatusBadge from "./StatusBadge";

export default function InterviewDetails({
  interview,
}) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      p-8
      "
    >
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">
          Interview Details
        </h2>

        <StatusBadge
          status={
            interview.status
          }
        />
      </div>

      <div className="mt-8 space-y-4">
        <p>
          Candidate:
          {" "}
          {interview.candidate}
        </p>

        <p>
          Position:
          {" "}
          {interview.role}
        </p>

        <p>
          Interviewer:
          {" "}
          {interview.interviewer}
        </p>

        <p>
          Time:
          {" "}
          {interview.time}
        </p>

        <a
          href={
            interview.meetingLink
          }
          className="
          inline-block
          mt-4
          px-5
          py-3
          rounded-xl
          bg-white
          text-black
          "
        >
          Join Meeting
        </a>
      </div>
    </div>
  );
}