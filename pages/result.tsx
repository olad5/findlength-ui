import ResultTemplate from "../src/components/templates/result-template/ResultTemplate";
import { InferGetServerSidePropsType } from "next";
import { ActionType, APIResponse } from "../types/types.d";
import { useAppContext } from "../context/AppContext";
import { useRouter } from "next/router";
import { handleBtnClicked, handleTextChange } from "../utils/functions";
import { useEffect } from "react";

export default function Result({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [state, dispatch] = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (state.loading) {
      dispatch({ type: ActionType.IS_LOADING, value: false });
    }
  }, [router.query.timestamp]);

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

  const apiLink =
    "video" === resource
      ? `${
          process.env.NODE_ENV === "development"
            ? process.env.LOCALHOST
            : process.env.API_URL
        }/getVideoInfo`
      : `${
          process.env.NODE_ENV === "development"
            ? process.env.LOCALHOST
            : process.env.API_URL
        }/getPlaylistInfo`;

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
        destination: "/error?timestamp=" + Date.now(),
        status: true,
      },
    };
  }

  return {
    props: { data: data },
  };
};
