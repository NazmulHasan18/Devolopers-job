import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
   const error = useRouteError();
   console.error(error);

   return (
      <div className="flex flex-col justify-center items-center h-[100vh]">
         <h1 className="text-4xl font-bold mb-5">Oops!</h1>
         <p className="text-xl mb-5">Sorry, an unexpected error has occurred.</p>
         <p className="text-gray-400 font-semibold">
            <i>{error.statusText || error.message}</i>
         </p>
      </div>
   );
}
