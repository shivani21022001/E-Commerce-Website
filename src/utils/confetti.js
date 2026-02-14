import confetti from "canvas-confetti"

export const celebrate = () => {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
  })
}
