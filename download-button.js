"use client";

// Minta link download ke server, lalu buka link-nya.
export default function DownloadButton({ gameId }) {
  async function handleDownload() {
    const res = await fetch(`/api/download/${gameId}`);
    const data = await res.json();
    if (data.url) window.location.href = data.url;
    else alert(data.error ?? "Gagal download");
  }

  return (
    <button onClick={handleDownload} style={{ padding: "8px 16px", borderRadius: 8, border: 0, cursor: "pointer" }}>
      Download
    </button>
  );
}
