import ResultTemplate from "../components/templates/result-template/ResultTemplate";
import { InferGetServerSidePropsType } from "next";
import { APIResponse } from "../types/types.d";
import { useAppContext } from "../context/AppContext";
import { useRouter } from "next/router";
import { handleBtnClicked, handleTextChange } from "../utils/functions";

export default function Result({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [state, dispatch] = useAppContext();
  const router = useRouter();
  return (
    <ResultTemplate
      data={data}
      onSearchBtnClicked={() =>
        handleBtnClicked(state.url, dispatch, state, router)
      }
      onInputBoxChanged={(e) =>
        handleTextChange(e.currentTarget.value, dispatch)
      }
    />
  );
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
