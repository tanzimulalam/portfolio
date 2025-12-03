// Create a context for all images in the assets/images directory
const imageContext = require.context(
  "../assets/images",
  false,
  /\.(png|jpg|jpeg|svg|gif)$/
);

// Helper function to safely load images
export const getImageSrc = (imagePath) => {
  if (!imagePath) return null;

  try {
    // Try to find the image in the context
    const imageKeys = imageContext.keys();
    const imageKey = imageKeys.find((key) => key.includes(imagePath));

    if (imageKey) {
      return imageContext(imageKey);
    }

    // If not found, return null
    return null;
  } catch (error) {
    // If image doesn't exist, return null
    return null;
  }
};
