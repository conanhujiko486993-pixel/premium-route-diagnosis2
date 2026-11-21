"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

import { Profile } from "@/types/profile";

type Props = {
  profile: Profile;
};

const labels = {

  salary: "高収入志向",

  growth: "成長志向",

  global: "グローバル志向",

  welfare: "福利厚生重視",

  social: "社会貢献志向",

  specialty: "専門性志向",

  entrepreneurship: "起業家志向",

  management: "経営志向",

  workLifeBalance:
    "ワークライフバランス重視",

};

export default function ProfileRadarChart({
  profile,
}: Props) {

  const data = Object.entries(profile)
    .map(([key, value]) => ({
      subject:
        labels[
          key as keyof typeof labels
        ],
      value,
    }));

  const topTraits =
    [...data]
      .sort(
        (a, b) =>
          b.value - a.value
      )
      .slice(0, 3);

  return (

    <section
      className="
      mt-12

      bg-white/80

      backdrop-blur

      rounded-3xl

      shadow-xl

      p-8
      "
    >

      <div className="mb-8">

        <div
          className="
          text-sm

          uppercase

          tracking-widest

          font-bold

          text-indigo-600
          "
        >
          PERSONALITY ANALYSIS
        </div>

        <h2
          className="
          mt-2

          text-4xl

          font-black

          text-slate-900
          "
        >
          📊 あなたの価値観分析
        </h2>

        <p
          className="
          mt-3

          text-slate-600

          leading-relaxed

          max-w-3xl
          "
        >
          診断の回答をもとに、
          あなたがどの価値観を重視しているかを
          可視化しました。
          数値が高いほど、
          その価値観を強く持っていることを表しています。
        </p>

      </div>

      <div
        className="
        grid

        md:grid-cols-3

        gap-4

        mb-8
        "
      >

        <div
          className="
          bg-indigo-50

          rounded-2xl

          p-5
          "
        >

          <div
            className="
            text-sm

            text-indigo-500
            "
          >
            最重要価値観
          </div>

          <div
  className="
  text-3xl

  font-black

  text-indigo-900

  drop-shadow-sm
  "
>
  🥇 成長
</div>


        </div>

        <div
          className="
          bg-blue-50

          rounded-2xl

          p-5
          "
        >

          <div
            className="
            text-sm

            text-blue-500
            "
          >
            第2価値観
          </div>

          <div
  className="
  mt-2

  text-2xl

  font-extrabold

  text-blue-900
  "
>
  🥈 {topTraits[1]?.subject}
</div>


        </div>

        <div
          className="
          bg-cyan-50

          rounded-2xl

          p-5
          "
        >

          <div
            className="
            text-sm

            text-cyan-500
            "
          >
            第3価値観
          </div>

          <div
  className="
  mt-2

  text-2xl

  font-extrabold

  text-cyan-900
  "
>
  🥉 {topTraits[2]?.subject}
</div>

        </div>

      </div>

      <div
        className="
        h-[450px]
        "
      >

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <RadarChart
            outerRadius="70%"
            data={data}
          >

            <PolarGrid />

            <PolarAngleAxis
              dataKey="subject"
            />

            <PolarRadiusAxis
              domain={[0, 18]}
            />

            <Radar
              name="価値観"

              dataKey="value"

              stroke="#4F46E5"

              fill="#4F46E5"

              fillOpacity={0.45}
            />

          </RadarChart>

        </ResponsiveContainer>

      </div>

      <div
        className="
        mt-6

        text-center

        text-sm

        text-slate-500
        "
      >
        💡 このグラフは企業マッチングの計算にも利用されています
      </div>

    </section>

  );

}
