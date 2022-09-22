import React from "react";

const NewsList = ({ searchList }) => {
  console.log(searchList);
  return (
    <div>
      {searchList.map((article) => {
        return <p>{article.title} </p>;
      })}
    </div>
  );
};

export default NewsList;
