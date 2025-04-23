import React from 'react';
import './News.css';

const newsList = [
  {
    id: 1,
    title: 'AI Workshop Conducted Successfully',
    date: 'April 10, 2025',
    summary: 'A hands-on workshop on Artificial Intelligence was held with over 200 students participating actively.'
  },
  {
    id: 2,
    title: 'National Level Hackathon Winners',
    date: 'March 25, 2025',
    summary: 'Our students secured 1st position at the National Hackathon 2025 hosted by NIT Delhi.'
  },
  {
    id: 3,
    title: 'Seminar on Career Opportunities',
    date: 'March 5, 2025',
    summary: 'Experts from top tech companies shared insights on career paths and emerging technologies.'
  },
  {
    id: 4,
    title: 'Annual Sports Meet Highlights',
    date: 'February 20, 2025',
    summary: 'The college hosted its annual sports meet with thrilling performances and enthusiastic participation.'
  },
];

function News() {
  return (
    <div className="news-section">
      <h2 className="news-heading">Latest College News</h2>
      <div className="news-cards">
        {newsList.map((news) => (
          <div key={news.id} className="news-card">
            <div className="news-date">{news.date}</div>
            <h3 className="news-title">{news.title}</h3>
            <p className="news-summary">{news.summary}</p>
            <button className="read-more">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;