import Navbar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const DashBoardLayout = async ({children} : {
    children: React.ReactNode
}) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
        <SideBar apiLimitCount={apiLimitCount} isPro={isPro} />
      </div>
      <main className="md:pl-72 pb-10">
        <Navbar />
        {children}
      </main>
    </div>

  )
}

export default DashBoardLayout;