import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    !user && navigate('/login')
  }, [user, navigate])

  return (
    <div>
      Dashboard
      <div>Hello {user}</div>
    </div>
  );
};

export default Dashboard;
