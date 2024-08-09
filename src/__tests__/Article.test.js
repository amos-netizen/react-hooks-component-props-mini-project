import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ArticleList from '../components/ArticleList';

test('renders articles correctly', () => {
  const articles = [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site"
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé"
    }
  ];

  render(<ArticleList articles={articles} />);
  
  // Print the rendered HTML to debug
  screen.debug();

  // Check if articles are rendered
  articles.forEach(article => {
    expect(screen.getByText(article.title)).toBeInTheDocument();
    expect(screen.getByText(article.date)).toBeInTheDocument();
    expect(screen.getByText(article.preview)).toBeInTheDocument();
  });
});
