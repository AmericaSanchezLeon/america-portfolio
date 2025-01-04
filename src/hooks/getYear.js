export const getExperienceYears = (startYear) => {
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

export const uxExperience = getExperienceYears(2019); 
export const webDevExperience = getExperienceYears(2020);
export const designExperience = getExperienceYears(2015);