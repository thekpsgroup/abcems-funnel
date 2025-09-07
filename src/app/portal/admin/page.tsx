"use client";
import { useEffect, useState } from "react";

type Course = { id: string; title: string; priceCents: number };

export default function AdminUploads() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [courseIdHW, setCourseIdHW] = useState("");
  const [courseIdCSV, setCourseIdCSV] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/courses").then(r => r.json()).then(d => {
      setCourses(d.courses || []);
      if (d.courses?.length) {
        setCourseIdHW(d.courses[0].id);
        setCourseIdCSV(d.courses[0].id);
      }
    });
  }, []);

  async function uploadHomework(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fileInput = form.querySelector<HTMLInputElement>("#homeworkFile");
    if (!fileInput?.files?.[0]) return setMsg("Select a PDF first.");
    setBusy(true); setMsg(null);
    const fd = new FormData();
    fd.append("file", fileInput.files[0]);
    const res = await fetch(`/api/upload/homework?courseId=${courseIdHW}`, { method: "POST", body: fd });
    const json = await res.json();
    setBusy(false);
    setMsg(res.ok ? `Uploaded: ${json.key}` : `Error: ${json.error || res.status}`);
  }

  async function uploadRoster(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fileInput = form.querySelector<HTMLInputElement>("#rosterFile");
    if (!fileInput?.files?.[0]) return setMsg("Select a CSV first.");
    setBusy(true); setMsg(null);
    const fd = new FormData();
    fd.append("file", fileInput.files[0]);
    const res = await fetch(`/api/upload/roster?courseId=${courseIdCSV}`, { method: "POST", body: fd });
    const json = await res.json();
    setBusy(false);
    setMsg(res.ok ? `Roster processed: ${json.created} learners` : `Error: ${json.error || res.status}`);
  }

  return (
    <main className="mx-auto max-w-3xl p-6 space-y-8">
      <h1 className="text-3xl font-bold">Admin Uploads</h1>
      {msg && <div className="p-3 rounded bg-green-100 text-green-800">{msg}</div>}

      <section className="border rounded-xl p-5 space-y-3">
        <h2 className="text-xl font-semibold">Upload Homework PDF</h2>
        <form onSubmit={uploadHomework} className="space-y-3">
          <label className="block">
            <span className="text-sm">Course</span>
            <select className="mt-1 w-full border rounded p-2" value={courseIdHW} onChange={e=>setCourseIdHW(e.target.value)}>
              {courses.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="text-sm">PDF File</span>
            <input id="homeworkFile" type="file" accept="application/pdf" className="mt-1 w-full" />
          </label>
          <button disabled={busy} className="px-4 py-2 rounded bg-black text-white">{busy ? "Uploading..." : "Upload PDF"}</button>
        </form>
      </section>

      <section className="border rounded-xl p-5 space-y-3">
        <h2 className="text-xl font-semibold">Upload Roster CSV</h2>
        <form onSubmit={uploadRoster} className="space-y-3">
          <label className="block">
            <span className="text-sm">Course</span>
            <select className="mt-1 w-full border rounded p-2" value={courseIdCSV} onChange={e=>setCourseIdCSV(e.target.value)}>
              {courses.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="text-sm">CSV File</span>
            <input id="rosterFile" type="file" accept="text/csv" className="mt-1 w-full" />
          </label>
          <button disabled={busy} className="px-4 py-2 rounded bg-black text-white">{busy ? "Uploading..." : "Upload CSV"}</button>
        </form>
      </section>
    </main>
  );
}
