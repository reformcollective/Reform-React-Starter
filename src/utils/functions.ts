export const vwToPx = (vw: number) => {
  const px = vw * (window.innerWidth / 100)

  return px
}