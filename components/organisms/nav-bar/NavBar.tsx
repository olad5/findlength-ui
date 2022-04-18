import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-between w-3/4 m-auto items-center">
      <Link href="/">
        <a className="flex cursor-pointer items-center ">
          <img src="/icons/play-btn-fill.svg" alt="" className="w-6" />
          <p className="text-secondary-sand ml-2 text-2xl">Findlength</p>
        </a>
      </Link>
      <div>
        <a href="#">
          <img
            src="/icons/github-original.svg"
            alt="github icon"
            className="w-6"
          />
        </a>
      </div>
    </div>
  );
}
