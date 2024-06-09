import { redirect } from "next/navigation";

import { getSession } from "@/actions";

const PremiumPage = async () => {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/");
  }

  return (
    <div className="premium">
      <h1>Welcome to Premium Page</h1>
    </div>
  );
};

export default PremiumPage;
