export const formatDate = (date: any) => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const dayDiff = Math.floor(diff / 86400000); // Number of milliseconds in a day
  if (isNaN(dayDiff) || dayDiff < 0) {
    return "";
  }
  if (dayDiff === 0) {
    return "Today";
  }
  if (dayDiff === 1) {
    return "Yesterday";
  }
  if (dayDiff < 7) {
    return `${dayDiff} days ago`;
  }
  return date.toLocaleDateString(); // Fallback to regular date format for older dates
};

export const getReadingTime = (text: any) => {
  const wordsPerMinute = 200; // Change this to adjust reading speed
  const wordCount = text.trim().split(/\s+/g).length;
  const readingTimeMinutes = wordCount / wordsPerMinute;
  const readingTime = Math.ceil(readingTimeMinutes);
  return `${readingTime} min read`;
};
