export default async function downloadFile(name) {
  const path = `/files/${name}`;

  const blob = await fetch(path).then((r) => r.blob());
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
  a.remove();
}
