export const findTotalVideo = (courseVideoData) => {
  if (!courseVideoData || !Array.isArray(courseVideoData.moduls)) return 0;

  return courseVideoData.moduls.reduce((acc, modul) => {
    return acc + (modul.modul_lessons?.length || 0);
  }, 0);
};
