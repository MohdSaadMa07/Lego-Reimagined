import Spline from "@splinetool/react-spline";
import './Intro.css'

export default function Home() {
  return (
    <main className="hero-container">
      {/* Spline 3D Animation (Background) */}
      <div className="spline-bg">
        <Spline scene="https://prod.spline.design/fYL71WAboIRGLMP4/scene.splinecode" />
      </div>

      {/* Overlayed Text and Button */}
      <div className="hero-content">
        <h1>Reimagine Play with LEGO</h1>
        <p>Discover a world of endless creativity.</p>
        <button className="discover-btn">Discover</button>
      </div>
    </main>
  );
}
