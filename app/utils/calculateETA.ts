export const calculateETA: (
  bytesUploaded: number,
  bytesTotal: number,
  uploadStartTime: number
) => string = (bytesUploaded, bytesTotal, uploadStartTime) => {
  if (bytesUploaded <= 0 || bytesTotal <= 0) return "Calculating...";

  const timeElapsedInSeconds = (Date.now() - uploadStartTime) / 1000;
  const uploadSpeed = bytesUploaded / timeElapsedInSeconds;
  const bytesRemaining = bytesTotal - bytesUploaded;
  const etaInSeconds = bytesRemaining / uploadSpeed;

  return `${Math.floor(etaInSeconds / 60)}m ${Math.floor(etaInSeconds % 60)}s`;
};
