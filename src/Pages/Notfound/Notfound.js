import React from "react";
import notFound from '../../images/notfound.jpg';
export default function Notfound() {
  return (
    <div className="bg text-center">
      <img className="m-5" src={notFound} alt="404" />
    </div>
  );
}
