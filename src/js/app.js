export default function sortHeroesByHp(array) {
  array.sort((a, b) => b.health - a.health);
  return array;
}
