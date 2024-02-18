import React from "react";
import classes from "./Card.module.css";
const Card = () => {
  return (
    <section className={classes.sec}>
      <h1 className={classes.head}>Duel Hub</h1>
      <section className={classes["sec-2"]}>
        <p>Learn everything about your agent and master their skills</p>
        <p>
          Discover the best tips, guides, and news about all Valorant agents and
          their abilities. Become a pro player and dominate the game.
        </p>
        <p>
          Are you a fan of Valorant, the popular tactical shooter game? If yes,
          then this website is for you. Here, you will find everything you need
          to know about Valorant agents, such as their roles, abilities,
          strategies, and tips. You will also get the latest news and updates
          about the game, as well as access to a vibrant community of fellow
          players. Whether you are a beginner or a pro, this website will help
          you master the game and have more
        </p>
      </section>
      </section>
  );
};
export default Card;
