import ResultTemplate from "../components/templates/result-template/ResultTemplate";
import { InferGetServerSidePropsType } from "next";
import { APIResponse } from "../types/types.d";

export default function Result({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <ResultTemplate data={data} />;
}

export const getServerSideProps = async (context) => {
  let yt_link: string = context.query.url;
  const response = await fetch(`http://localhost:5200/getVideoInfo`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      url: yt_link,
    }),
  });

  const data: APIResponse = await response.json();

  return {
    props: { data: data },
  };
};
