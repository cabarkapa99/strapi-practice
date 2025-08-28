type PageData = {
  Title: string;
  description: string;
};

async function LoadPageData(): Promise<PageData> {
  const path = "/api/home-page";
  const BASE_URL = "http://localhost:1337";
  const url = new URL(path, BASE_URL);
  const response = await fetch(url.href);
  const data = await response.json();
  console.log(data);
  return data.data;
}

export default async function Home() {
  const page_data = await LoadPageData();
  const { Title, description } = page_data;
  return (
    <div>
      <h1>{Title}</h1>
      <p>{description}</p>
    </div>
  );
}
