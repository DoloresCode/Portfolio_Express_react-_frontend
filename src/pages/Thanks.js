import { Link } from 'react-router-dom';

function Thanks() {
  return (
    <div className="thanks-container">
    <div>
      <h2 className="thanks-heading">Thank you for reaching out!</h2>
      <p>I appreciate your interest and will get back to you soon.😊</p>
      <Link to="/" className="home-button">Go Back</Link>
    </div>
    </div>
  );
}

export default Thanks;