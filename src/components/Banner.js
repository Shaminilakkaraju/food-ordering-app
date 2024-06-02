import React from 'react';

function Banner({ banners }) {
  const [currentBanner, setCurrentBanner] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000); 
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <div className="banner">
      <img src={banners[currentBanner].image} alt={banners[currentBanner].title} />
      <div className="banner-info">
        <h3>{banners[currentBanner].title}</h3>
        <p>{banners[currentBanner].description}</p>
      </div>
    </div>
  );
}

export default Banner;
