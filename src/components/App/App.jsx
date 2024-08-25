import ProfileList from "../ProfileList/ProfileList";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import style from "./App.module.css";
import userData from "../../data/userData.json";
import friend from "../../data/friends.json";
import transaction from "../../data/transactions.json";

export default function App() {
  return (
    <div className={style.flex}>
      <ProfileList proff={userData} />
      <FriendList friends={friend} />
      <TransactionHistory transactions={transaction} />
    </div>
  );
}