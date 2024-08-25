import Stats from "../Stats/Stats";
import css from "./Profile.module.css";

export default function Profile({
  proff: { avatar, username, tag, location, stats },
}) {
  return (
    <div className={css.container}>
      <img className={css.avatar} src={avatar} alt={username} />
      <p className={css.title}>{username}</p>
      <p className={css.text}>@{tag}</p>
      <p className={css.text}>{location}</p>
      <Stats statss={stats} />
    </div>
  );
}