import { getAllGames } from "@/lib/games";
import DownloadButton from "./download-button";

export default function Home() {
  const games = getAllGames();

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <h1>Game Store</h1>
      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
        {games.map((game) => (
          <div key={game.id} style={{ background: "#1a1d24", padding: 16, borderRadius: 12 }}>
            <h2 style={{ marginTop: 0 }}>{game.title}</h2>
            <p>{game.description}</p>
            <small>v{game.version} · {game.sizeMB} MB</small>
            <div style={{ marginTop: 12 }}>
              <DownloadButton gameId={game.id} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
