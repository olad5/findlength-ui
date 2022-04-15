export default function Footer() {
  return (
    <div className="w-2/5 m-auto text-center text-primary-veryDarkBlue">
      {/* <div className="  border-t-[.5px] border-b-[.5px] items-center flex flex-col  w-4/5 border-slate-200 mx-6 mt-4 mb-12 lg:w-fit lg:border-t-0 lg:px-0 lg:flex-row lg:justify-center"> */}

      <p>
        Made with ❤️ by {""}{" "}
        <a
          href="#"
          className="underline underline-offset-4  decoration-primary-veryDarkBlue"
        >
          Francis
        </a>{" "}
        &{" "}
        <a
          href="#"
          className="underline underline-offset-4  decoration-primary-veryDarkBlue"
        >
          Japhet
        </a>
      </p>
    </div>
  );
}
