import React from "react";

const Safari = () => {
  return (
    <iframe
      src="https://www.google.com/webhp?igu=1"
      width="100%"
      height="100%"
      style={{ border: "none" }}
      loading="lazy"
      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      className="bg-white border-t-2 border-gray-400/50"
    />
  );
};

export default Safari;
