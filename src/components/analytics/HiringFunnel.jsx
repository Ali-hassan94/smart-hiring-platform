import {
  funnelData,
} from "@/data/analyticsData";

export default function HiringFunnel() {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      p-8
      "
    >
      <h2
        className="
        text-2xl
        font-bold
        mb-8
        "
      >
        Hiring Funnel
      </h2>

      {funnelData.map(
        (item) => (
          <div
            key={item.stage}
            className="mb-6"
          >
            <div className="flex justify-between">
              <span>
                {item.stage}
              </span>

              <span>
                {item.value}
              </span>
            </div>

            <div
              className="
              h-3
              bg-white/10
              rounded-full
              mt-2
              "
            >
              <div
                className="
                h-full
                bg-white
                rounded-full
                "
                style={{
                  width: `${item.value / 5}%`,
                }}
              />
            </div>
          </div>
        )
      )}
    </div>
  );
}