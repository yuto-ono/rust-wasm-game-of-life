import "./style.css"
import { Universe } from "../wasm/pkg"

const pre = document.getElementById("game-of-life-canvas")

if (pre != null) {
  const universe = Universe.new()

  const renderLoop = () => {
    pre.textContent = universe.render()
    universe.tick()

    requestAnimationFrame(renderLoop)
  }

  requestAnimationFrame(renderLoop)
}
