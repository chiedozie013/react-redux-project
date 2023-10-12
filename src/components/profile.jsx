import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const { rockets } = useSelector((store) => store.rockets);
  const { missions } = useSelector((store) => store.missions);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved && rocket);
  const joinedMission = missions.filter((mission) => mission.reserved === true);

  return (
    <div>
      <div className="profileContainer">
        <div className="my_missions ">
          <h2>My Missions</h2>
          <div className="rocket">
            {joinedMission.map((mission) => {
              const { mission_id: id, mission_name: name } = mission;
              return (
                <p key={id} className="rocketReserved">
                  {name}
                </p>
              );
            })}
          </div>
        </div>
        <div className="my_missions ">
          <h2>My Rockets</h2>
          <div className="rocket">
            {reservedRockets.map((rocket) => (
              <p key={rocket.id} className="rocketReserved">
                {rocket.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
