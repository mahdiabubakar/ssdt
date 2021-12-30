import React from 'react';

const SkillItem = ({ skill }) => {
  return (
    <div className='card grid-2 my-2'>
      <div>
        <a href='!#' className='lead text-success'>
          {skill.name}
        </a>
      </div>
      <div>
        <p>
          <i>
            {skill.proficiency === 'novice'
              ? 'Novice'
              : skill.proficiency === 'no-experience-interested'
              ? 'Interested'
              : skill.proficiency === 'proficient'
              ? 'Proficient'
              : skill.proficiency === 'expert'
              ? 'Expert'
              : skill.proficiency === 'master' && 'Master'}
          </i>
        </p>
        <p className='text-right'>
          {skill.recommendations
            ? `${skill.recommendations} recommendation`
            : 'No recomendations yet'}
        </p>
      </div>
    </div>
  );
};

export default SkillItem;
