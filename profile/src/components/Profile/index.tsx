import { useState } from "react";

type ProfileProps = {
  userName: string;
  title: string;
  details: string;
};

const Profile = ({ userName, title, details }: ProfileProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <>
      <img src="https://fakeimg.pl/350x200/?text=Hello" alt="Hello Text" />
      <h2>{userName}</h2>
      <p>{title}</p>
      <button onClick={() => toggleDetails()}>Show Details</button>
      {showDetails ? <p>{details}</p> : null}
    </>
  );
};

export default Profile;
