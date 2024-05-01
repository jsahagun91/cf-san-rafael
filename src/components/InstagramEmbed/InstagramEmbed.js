import React, { useEffect } from 'react';

const InstagramEmbed = () => {
  useEffect(() => {
    // Function to add the Instagram embed script to the HTML document
    const addInstagramScript = () => {
      const script = document.createElement('script');
      script.async = true;
      script.src = "//www.instagram.com/embed.js";
      document.body.appendChild(script);
    };

    addInstagramScript();

    // Optional: Cleanup function to remove the script when the component unmounts
    return () => {
      // Remove the script tag if needed or reset window.instgrm
      const instagramScript = document.querySelector('script[src="//www.instagram.com/embed.js"]');
      if (instagramScript) {
        instagramScript.remove();
      }
      // This may not be necessary, but in case there are listeners attached:
      window.instgrm = undefined;
    };
  }, []); // Empty dependency array ensures this runs only once after the initial rendering

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', padding: '10px' }}>
      <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/C5_OOD0L5Oy/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: '0', borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxHeight: '70vh', maxWidth: '540px', minWidth: '326px', padding: '0', width: '99.375%', width: '-webkit-calc(100% - 2px)', width: 'calc(100% - 2px)' }}>
        {/* Instagram content should be automatically transformed by the script */}
      </blockquote>
    </div>
  );
};

export default InstagramEmbed;
