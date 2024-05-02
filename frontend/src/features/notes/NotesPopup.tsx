import React, { useState } from "react";

interface Article {
  id: number;
  title: string;
  content: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "First Title",
    content: "Here is the content for the first title.",
  },
  {
    id: 2,
    title: "Second Title",
    content: "Here is the content for the second title.",
  },
  {
    id: 3,
    title: "Third Title",
    content: "Here is the content for the third title.",
  },
];

const NotesPopup: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article>(articles[0]);

  const handleTitleClick = (articleId: number) => {
    const article = articles.find((article) => article.id === articleId);
    setSelectedArticle(article || articles[0]);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/4 bg-white p-4 shadow-lg overflow-auto">
        {articles.map((article) => (
          <div
            key={article.id}
            className="p-2 hover:bg-blue-100 cursor-pointer"
            onClick={() => handleTitleClick(article.id)}
          >
            {article.title}
          </div>
        ))}
      </div>
      <div className="w-3/4 p-8">
        <h1 className="text-xl font-bold mb-4">{selectedArticle.title}</h1>
        <p>{selectedArticle.content}</p>
      </div>
    </div>
  );
};

export default NotesPopup;
