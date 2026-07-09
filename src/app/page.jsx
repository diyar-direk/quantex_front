import ParticlesBackground from "@/components/Background";
import "@/style/index.css";

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <main
        style={{
          height: "100vh",
          display: "grid",
          placeItems: "center",
          color: "#fff",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1>dsadsa</h1>
      </main>
    </>
  );
}
