import { redirect } from "next/navigation";

import { getSession } from "@/actions";

const ProfilePage = async () => {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/");
  }

  return (
    <div className="profile">
      <h1>Welcome to Profile Page</h1>
      <p>
        Welcome, <b>{session.username}</b>
      </p>
      <span>
        You are a <b>{session.isPro ? "Premium" : "Free"}</b> user
      </span>
      <form action="">
        <button>{session.isPro ? "Cancel" : "Buy"} Premium</button>
      </form>
    </div>
  );
};

export default ProfilePage;
