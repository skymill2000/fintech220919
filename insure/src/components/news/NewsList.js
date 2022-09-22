import React from "react";

const NewsList = ({ searchList }) => {
  console.log(searchList);
  return (
    <div>
      {searchList.map((article) => {
        return (
          <div>
            <img src={article.urlToImage}></img>
            <p>{article.title} </p>
            <a href={article.url}>기사로가기</a>
          </div>
        );
      })}
    </div>
  );
};

export default NewsList;
