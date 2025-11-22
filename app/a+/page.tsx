'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";

type QCM = {
  question: string;
  choices: string[];
  domainPath: string;
  timestamp: number;
};

export default function ShowQuestions() {
  const [qcmList, setQcmList] = useState<QCM[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("qcm_list");
    if (stored) {
      setQcmList(JSON.parse(stored));
    }
  }, []);

  if (qcmList.length === 0) {
    return (
      <div className="bg-[#fff7ea] text-black w-screen min-h-screen flex flex-col items-center py-4">
        <Link href="/a+/form" className="underline text-blue-700 mb-4">Back to form</Link>
        <h2>No questions saved yet</h2>
      </div>
    );
  }

  return (
    <div className="bg-[#fff7ea] text-black w-screen min-h-screen flex flex-col items-center py-4 gap-y-4">
      <Link href="/a+/form" className="underline text-blue-700 mb-4">Back to form</Link>
      <h2>All Questions</h2>

      <div className="flex flex-col gap-y-4 w-full max-w-2xl px-4">
        {qcmList.map((qcm, idx) => (
          <div key={idx} className="border border-black rounded p-4 bg-white">
            <h3 className="font-semibold">Question:</h3>
            <p className="mb-2">{qcm.question}</p>

            <h4 className="font-semibold">Domain Path:</h4>
            <p className="mb-2">{qcm.domainPath}</p>

            <h4 className="font-semibold">Choices:</h4>
            <ul className="list-disc pl-6">
              {qcm.choices.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
