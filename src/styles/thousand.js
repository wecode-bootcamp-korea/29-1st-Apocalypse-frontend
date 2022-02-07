export function thousand(price) {
  return `${parseInt(price)
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}원`;
}
