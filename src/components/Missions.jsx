import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { joinMission } from '../redux/MissionsSlice';
import fetchMissions from '../API/apiMissions';

const Missions = () => {
  const { missions, loading } = useSelector((store) => store.missions);

  const dispatch = useDispatch();

  useEffect(() => {
    if (loading === false) dispatch(fetchMissions());
  }, [dispatch, loading]);

  return (
    <div className="tableContainer">
      <table className="table">
        <colgroup>
          <col className="col1" />
          <col className="col2" />
        </colgroup>

        <tbody>
          <tr className="tableHeading">
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>&nbsp;</th>
          </tr>

          {missions.map((mission) => {
            const {
              mission_id: id,
              mission_name: name,
              description,
              reserved,
            } = mission;
            // console.log(id);

            return (
              <tr key={id}>
                <th>{name}</th>
                <td>{description}</td>
                <td>
                  <button
                    type="button"
                    className={reserved ? 'activeMember' : 'notActive'}
                  >
                    {reserved ? 'Active member' : 'Not a member'}
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className={reserved ? 'activeMission' : 'notActiveMission'}
                    onClick={() => {
                      dispatch(joinMission(id));
                    }}
                  >
                    {reserved ? 'Leave mission' : 'Join mission'}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Missions;
