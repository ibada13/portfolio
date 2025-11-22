'use client';
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Node = {
  id: number;
  name: string;
  parentId: number | null;
};

const initialNodes: Node[] = [
  { id: 1, name: "English", parentId: null },
  { id: 2, name: "Grammar", parentId: 1 },
  { id: 3, name: "Past", parentId: 2 },
  { id: 4, name: "Future", parentId: 2 },
];

export default function QCMForm() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [levels, setLevels] = useState<{ parentId: number | null; value: number | "add" | "" }[]>([]);
  const [newName, setNewName] = useState<Record<number, string>>({});
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState(["", "", "", ""]);

  useEffect(() => {
    const storedNodes = localStorage.getItem("nodes_list");
    if (storedNodes) {
      setNodes(JSON.parse(storedNodes));
    } else {
      setNodes(initialNodes);
      localStorage.setItem("nodes_list", JSON.stringify(initialNodes));
    }
    setLevels([{ parentId: null, value: "" }]);
  }, []);

  useEffect(() => {
    localStorage.setItem("nodes_list", JSON.stringify(nodes));
  }, [nodes]);

  const childrenOf = (parentId: number | null) => nodes.filter((n) => n.parentId === parentId);

  const handleSelect = (levelIndex: number, rawValue: string) => {
    const value = rawValue === "add" ? "add" : rawValue === "" ? "" : Number(rawValue);
    setLevels((prev) => {
      const newLevels = prev.slice(0, levelIndex + 1);
      newLevels[levelIndex] = { parentId: prev[levelIndex].parentId, value };
      if (typeof value === "number") {
        newLevels.push({ parentId: value, value: "" });
      }
      return newLevels;
    });
  };

  const addNode = (parentId: number | null, levelIndex: number) => {
    const name = (newName[levelIndex] || "").trim();
    if (!name) return;

    const newNode: Node = {
      id: Date.now(),
      name,
      parentId,
    };

    setNodes((old) => [...old, newNode]);

    setLevels((prev) => {
      const updated = prev.slice(0, levelIndex + 1);
      updated[levelIndex] = { parentId, value: newNode.id };
      updated.push({ parentId: newNode.id, value: "" });
      return updated;
    });

    setNewName((old) => {
      const copy = { ...old };
      delete copy[levelIndex];
      return copy;
    });
  };

  const updateChoice = (index: number, value: string) => {
    const copy = [...choices];
    copy[index] = value;
    setChoices(copy);
  };

  const fakeFillAI = () => {
    setQuestion("im a good question ?");
    setChoices([
      "this is choice number one but it is wrong.",
      "this is choice number two and it is correct (maybe (number three is the right one (maybe))).",
      "im definitely not the right answer.",
      "incorrect but pretending to be smart.",
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

   
    const domainPath = levels
      .map((l) => (typeof l.value === "number" ? nodes.find(n => n.id === l.value)?.name : null))
      .filter((n): n is string => !!n)
      .join(" → ");

    const payload = {
      question,
      choices,
      domainPath,
      timestamp: Date.now(),
    };

    const stored = localStorage.getItem("qcm_list");
    const list = stored ? JSON.parse(stored) : [];

    list.push(payload);
    localStorage.setItem("qcm_list", JSON.stringify(list));

    // alert("Saved to localStorage!");

    setQuestion("");
    setChoices(["", "", "", ""]);
  };

  return (
    <div className="bg-[#fff7ea] text-black w-screen min-h-screen self-center flex flex-col gap-y-2 py-4" style={{ maxWidth: 500 }}>
      <Link href="/a+" className="underline text-blue-700">All questions</Link>
      <h2>Create Question</h2>

      {levels.map((level, i) => {
        const children = childrenOf(level.parentId);
        const selected = level.value;

        return (
          <div key={i} style={{ marginBottom: 10 }}>
            <label style={{ display: "block" }}>{i === 0 ? "Domain" : `Subdomain ${i}`}</label>

            <select
              value={selected === "add" ? "add" : selected === "" ? "" : String(selected)}
              onChange={(e) => handleSelect(i, e.target.value)}
            >
              <option value="">-- select --</option>
              {children.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
              <option value="add">+ Add new</option>
            </select>

            {selected === "add" && (
              <div style={{ marginTop: 6 }}>
                <input
                  placeholder="New name"
                  value={newName[i] || ""}
                  onChange={(e) => setNewName((old) => ({ ...old, [i]: e.target.value }))}
                />
                <button type="button" onClick={() => addNode(level.parentId, i)}>Add</button>
              </div>
            )}
          </div>
        );
      })}

      <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
        <h3>Question</h3>
        <textarea
          required
          placeholder="Write question..."
          style={{ width: "100%", height: 80 }}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <div className="flex justify-between items-center">
          <h3>Choices</h3>
        </div>

        {choices.map((c, i) => (
          <div key={i} style={{ marginBottom: 6 }}>
            <input
              placeholder={`Choice ${i + 1}`}
              value={c}
              onChange={(e) => updateChoice(i, e.target.value)}
              required
            />
          </div>
        ))}

        <div className="flex gap-x-4 justify-center mt-4">
          <button type="submit" className="border border-black rounded px-4 py-2">Save</button>
          <button type="button" className="border border-black rounded px-4 py-1 uppercase" onClick={fakeFillAI}>
            Fill with AI 🤖
          </button>
        </div>
      </form>
    </div>
  );
}
