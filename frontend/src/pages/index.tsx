import React from "react";
import Swal from "sweetalert2";

function Index() {
  const confirmEdit = () => {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });
  };

  return (
    <div className="text-center mt-8">
      <h1>hello world</h1>
      <button
        className="border bg-blue-200 p-2 hover:bg-blue-100"
        onClick={confirmEdit}
      >
        Click me plss
      </button>
    </div>
  );
}

export default Index;
