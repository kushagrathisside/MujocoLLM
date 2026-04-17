export const pv = (source, fallback = [0, 0, 0]) => {
  if (!source) return fallback;
  const nums = source.trim().split(/\s+/).map(Number);
  return nums.length >= 3 ? [nums[0], nums[1], nums[2]] : fallback;
};

export const psz = (source) => {
  if (!source) return [0.1, 0.1, 0.1];
  return source.trim().split(/\s+/).map(Number);
};

export const prgba = (source) => {
  if (!source) return 0x4a9fd4;
  const [red, green, blue] = source.trim().split(/\s+/).map(Number);
  return (Math.round(red * 255) << 16) | (Math.round(green * 255) << 8) | Math.round(blue * 255);
};

export const dtr = (degrees) => degrees * Math.PI / 180;

export const peu = (source) => {
  if (!source) return [0, 0, 0];
  return source.trim().split(/\s+/).map((value) => dtr(parseFloat(value) || 0));
};
