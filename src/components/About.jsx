import React from 'react';

const AboutUs = () => {
  return (
    <div className="container my-5" style={{ minHeight: "60vh" }}>
      <h2 className="text-center mb-4" style={{ color: "#2e8b57" }}>
        About RecipeVault
      </h2>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555" }}>
        Welcome to <strong>RecipeVault</strong>, your go-to destination for discovering delicious
        recipes from around the world. Whether you're a seasoned chef or just starting out, 
        RecipeVault makes it easy for you to explore and experiment with a wide variety of dishes. 
        Our mission is to provide a platform where food enthusiasts can find inspiration, learn new techniques, 
        and share their culinary creations.
      </p>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555" }}>
        At RecipeVault, we believe that cooking is more than just a daily chore – it's an opportunity 
        to bring people together, create memorable experiences, and explore diverse cultures. 
        That's why we offer a curated collection of recipes tailored to your taste and preferences. 
        From traditional dishes to innovative new flavors, RecipeVault is designed to help you discover the joy of cooking.
      </p>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555" }}>
        Join our community today, save your favorite recipes, and embark on a culinary adventure with us!
      </p>
    </div>
  );
};

export default AboutUs;
