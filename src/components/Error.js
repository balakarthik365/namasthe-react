import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>
        Oop!! There is an error in the page.
        {err.statusText} - error status: {err.status}
      </h1>
      <h2>{err.data}</h2>
    </div>
  );
};
export default Error;
