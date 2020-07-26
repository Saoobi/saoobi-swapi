export default function parseUrlItem(url) {
  const pathname = new URL(url).pathname;
  const split = pathname.split("/");
  const result = { category: split[2], id: split[3] };

  return result;
}
