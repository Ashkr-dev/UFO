import { OrbitControls } from "@react-three/drei";
import PostProcessing from "./components/Postprocessing.jsx";
import Ufo from "./components/Ufo.jsx";

export default function App() {
  return (
    <>
      <OrbitControls />

      <Ufo />

      {/* <PostProcessing /> */}
    </>
  );
}
