import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen bg-[var(--color-midnight)]">
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
