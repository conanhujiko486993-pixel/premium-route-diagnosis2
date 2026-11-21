"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import QuestionCard from "@/components/QuestionCard";
import ProgressBar from "@/components/ProgressBar";

import { axisQuestions } from "@/data/axisQuestions";
import { companyQuestions } from "@/data/companyQuestions";

import {
  calculateAxisScore,
  determineType,
} from "@/lib/diagnosis";

export default function DiagnosisPage() {

  const router = useRouter();

  const questions = [
    ...axisQuestions,
    ...companyQuestions,
  ];

  const [current, setCurrent] =
    useState(0);

  const [answers, setAnswers] =
    useState<string[]>([]);

  const question =
    questions[current];

  if (!question) {
    return (
      <main className="p-8">
        読み込み中...
      </main>
    );
  }

  function handleSelect(
    answerId: string
  ) {

    const nextAnswers = [
      ...answers,
      answerId,
    ];

    setAnswers(nextAnswers);

    if (
      current <
      questions.length - 1
    ) {

      setCurrent(
        current + 1
      );

      return;
    }

    const axisAnswers =
      nextAnswers.slice(
        0,
        axisQuestions.length
      );

    const companyAnswers =
      nextAnswers.slice(
        axisQuestions.length
      );

    const axisScore =
      calculateAxisScore(
        axisAnswers,
        axisQuestions
      );

      
    const type =
      determineType(
        axisScore
      );

    localStorage.setItem(
      "type",
      type
    );

    localStorage.setItem(
      "answers",
      JSON.stringify(
        nextAnswers
      )
    );

    localStorage.setItem(
      "companyAnswers",
      JSON.stringify(
        companyAnswers
      )
    );

    router.push(
      "/result"
    );

  }

  return (

    <main
      className="
      max-w-3xl
      mx-auto
      p-8
      "
    >

      <ProgressBar
        current={
          current + 1
        }
        total={
          questions.length
        }
      />

      <QuestionCard
        question={
          question.question
        }
        options={
          question.options
        }
        onSelect={
          handleSelect
        }
      />

      <div
        className="
        mt-6
        text-center
        text-sm
        text-gray-500
        "
      >
        質問 {current + 1}
        ／
        {questions.length}
      </div>

    </main>

  );

}
