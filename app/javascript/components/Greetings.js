import React, { useEffect } from 'react';
import { fetchMessages } from '../redux/greetings/greetingSlice';
import { useDispatch, useSelector } from 'react-redux';

const Greetings = () => {
  const dispatch = useDispatch();
  const { greetings, error, loading } = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchMessages());
  }, []);

  return (
    <div>
      <div className="container" style={{ width: '60%', marginTop: '15%', borderRadius: '5px' }}>
        <div>
          <h2 className="title has-text-primary-dark has-background-primary-light p-3">Greetings</h2>
        </div>
        <div className="subtitle has-text-info-dark has-background-info-light p-3">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {greetings && <p>{greetings.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Greetings;