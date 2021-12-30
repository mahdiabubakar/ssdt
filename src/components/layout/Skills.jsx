import { useContext } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import UserContext from '../../context/user/userContext';
import SkillItem from './SkillItem';
import Spinner from './Spinner';
// import skillFormatter from '../../utils/skillFormatter';

const Skills = () => {
  // useContext initialization
  const userContext = useContext(UserContext);

  const { user } = userContext;

  if (user === null) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <h1>Skills and interest</h1>
        {user.strengths.map(skill => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </Fragment>
    );
  }
};

export default Skills;
