import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// If we use Link then everything happens at the client side,
// but if we use a then sends a request again to the server,
// hence it is best to use Link if they are internal links
// If you open network tab and see the changes you can understand it.

function AboutIconLink() {
  return (
    <div className="about-link">
      <Link to="/about">
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutIconLink;
