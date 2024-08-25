import Profile from "../Profile/Profile";
import css from "./ProfileList.module.css";

export default function ProfileList({ proff }) {
  return (
    <ul className={css.list}>
      {proff.map((item) => {
        return (
          <li key={proff.id}>
            <Profile proff={item} />
          </li>
        );
      })}
    </ul>
  );
}