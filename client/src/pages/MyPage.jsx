import React from 'react';

const MainPage = () => {
  return (
    <div className="nft-homepage">
    
      <main>
        <section className="hero">
          <h2>H O V NFT market place</h2>
          <p>Discover, collect, and trade unique digital assets on our platform.</p>
          <button>Get Started</button>
        </section>
        <section className="featured">
          <h3>Featured NFTs</h3>
          <div className="nft-grid">
            <div className="nft-card">
              <img src="https://i.ibb.co/gmwZG4f/Potatoz-NFT.jpg" alt="NFT" />
              <h4>NFT Title</h4>
              <p>Artist Name</p>
              <button>View Details</button>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>© 2023 H O V NFT market place. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MainPage;
