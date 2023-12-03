import { redirect } from "next/navigation";
import { cookies } from "next/dist/client/components/headers";

export default function protectedPage() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");
  const refreshToken = cookieStore.get("refreshToken");

  if (!accessToken || !refreshToken) {
    return redirect("/auth/login");
  }
}
