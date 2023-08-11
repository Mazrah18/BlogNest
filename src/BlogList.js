import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs, category }) => {
  const [displayCount, setDisplayCount] = useState(4); // Initial display count (2 rows)

  useEffect(() => {
    // Update the display count based on screen size
    const updateDisplayCount = () => {
      if (window.innerWidth >= 1200) {
        setDisplayCount(6);
      } else if (window.innerWidth >= 768) {
        setDisplayCount(4);
      } else {
        setDisplayCount(3);
      }
    };

    updateDisplayCount(); // Initial update
    window.addEventListener('resize', updateDisplayCount);

    return () => {
      window.removeEventListener('resize', updateDisplayCount);
    };
  }, []);

  const blogsToDisplay = blogs.slice(0, displayCount);
  const blogsToLoad = blogs.slice(displayCount);

  const handleViewMore = () => {
    setDisplayCount(displayCount + 3); // Increase display count by 3 blogs
  };

  if (blogs.length === 0) {
    return <h2 className="blog-list center-message">No {category === 'blogs' ? '' : category} blogs found.</h2>;
  }

  const handleRead = (blog) => {
    return (
      <Link to={`/${category}/${blog._id}`} className="read-more-link">
        Read more
      </Link>
    );
  };

  return (
    <div className="blog-list">
      <div className="blog-preview-container">
        {blogsToDisplay.map(blog => (

          <div className="blog-link" key={blog._id}>
            <div className="blog-preview">
              <div className="category-badge">{category}</div>
              <div className="blog-content">
                <h2 className="blog-title">{blog.title}</h2>
                <p className="blog-body">
                  {blog.body.substring(0, 200)}{blog.body.length > 200 && '...'}{blog.body.length >= 200 ? handleRead(blog) : ''}
                </p>
                <p className="blog-author" style={{ fontStyle: 'italic', fontWeight: 'bolder' }}>Written by {blog.author}</p>
                <Link to={`/${category}/${blog._id}`} className="blog-link" key={blog._id}>
                <button onClick={handleRead(blog)}> Read Post</button>
                </Link>
              </div>
            </div>
          </div>

        ))}
      </div>
      {blogsToLoad.length > 0 && (
        <div className="view-more-container">
          <button className="view-more-button" onClick={handleViewMore}>View More</button>
        </div>
      )}
    </div>
  );
}

export default BlogList;

