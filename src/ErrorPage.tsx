import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  let errorMessage: string = "";

  if (error instanceof Error && error.message) {
    errorMessage += error.message;
   }
   if (error && typeof error === 'object' && 'statusText' in error && (error as { statusText: string }).statusText) {
    errorMessage += (error as { statusText: string }).statusText;
  }

  return (
    // {error.statusText || error.message} doesn't work due to error being unkown, TS things
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i> 
            {errorMessage}
        </i>
      </p>
    </div>
  );
}