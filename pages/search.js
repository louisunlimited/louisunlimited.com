import React from "react";

const search = () => {
  return (
    // form for search
    <div className="max-w-[1100px] mx-auto pt-24 h-[calc(100vh_-_140px)] flex justify-center items-center text-center">
      <div className="">
        <h2 className="text-slate-200">Search Something Here!</h2>
        <form
          method="post"
          action="https://louisearch.com"
          placeholder="Input something to search..."
          className="w-full"
          style={{
            fontSize: "1.2rem",
            fontWeight: "400",
            color: "#333",
          }}
        >
          <input type="text" name="q" />
          <input
            type="submit"
            value="Search"
            className="cursor-pointer text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default search;
