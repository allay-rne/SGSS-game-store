import {Navigate} from "react-router-dom";
import {useAuthStore} from "@/features/auth/model/useAuthStore.ts";
import Button from "@/shared/ui/Button";

const Profile = () => {
  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)

  if (!user) return <Navigate to="/" replace />

  return (
    <div className="profile">
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <Button label="Log out" onClick={logout} />
    </div>
  )
}

export default Profile