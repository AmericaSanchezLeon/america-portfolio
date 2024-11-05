export default function getRandomColor() {
  const colorVars = [
    '#BF7802', // $yellow
    '#CB5C47', // $orange
    '#E04F88', // $pink
    '#8558C8', // $purple
    '#86991C', // $green
    '#5881CB', // $periwinkle
  ];
  const randomIndex = Math.floor(Math.random() * colorVars.length);
  return colorVars[randomIndex];
}