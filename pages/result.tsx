import ResultTemplate from "../components/templates/result-template/ResultTemplate";
import { InferGetServerSidePropsType } from "next";
import { APIResponse } from "../types/types.d";

export default function Result({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <ResultTemplate data={data} />;
}

export const getServerSideProps = async (context) => {
  let ytLink: string = context.query.url;
  let resource = context.query.resource;

  let apiLink =
    "video" === resource
      ? "http://localhost:5200/getVideoInfo"
      : "http://localhost:5200/getPlaylistInfo";
  const response = await fetch(apiLink, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      url: ytLink,
    }),
  });

  const data: APIResponse = await response.json();

  if (!data.status) {
    return {
      redirect: {
        permanent: false,
        destination: "/error",
      },
    };
  }

  return {
    props: { data: data },
  };
};
