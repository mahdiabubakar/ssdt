const skillFormatter = skills => {
  const noSkill = skills.filter(
    skill => skill.proficiency === 'no-experience-interested',
  );

  const noviceSkill = skills.filter(skill => skill.proficiency === 'novice');

  const proficientSkill = skills.filter(
    skill => skill.proficiency === 'proficient',
  );

  const expertSkill = skills.filter(skill => skill.proficiency === 'expert');

  const masterSkill = skills.filter(skill => skill.proficiency === 'master');

  console.log(masterSkill, expertSkill, proficientSkill, noviceSkill, noSkill);

  const skillSet = [
    masterSkill,
    expertSkill,
    proficientSkill,
    noviceSkill,
    noSkill,
  ];

  return skillSet;
};

export default skillFormatter;
