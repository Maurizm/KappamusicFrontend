export function compare(a, b) {
  if (a.album < b.album) {
    return -1;
  }
  if (a.album > b.album) {
    return 1;
  }
  return 0;
}
