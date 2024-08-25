import css from "./Stats.module.css";

export default function Stats({ statss: { followers, views, likes } }) {
  return (
    <ul className={css.stats}>
      <li className={css.item}>
        <span className={css.text}>Followers: </span>
        <span className={css.text}>{followers}</span>
      </li>
      <li className={css.item}>
        <span className={css.text}>Views: </span>
        <span className={css.text}>{views}</span>
      </li>
      <li className={css.item}>
        <span className={css.text}>Likes: </span>
        <span className={css.text}>{likes}</span>
      </li>
    </ul>
  );
}