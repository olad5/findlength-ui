export async function getVideoInfo(data: string) {
  const response = await fetch(`http://localhost:5200/getVideoInfo`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url: data }),
  });
  console.log(response);
  return await response.json();
}
