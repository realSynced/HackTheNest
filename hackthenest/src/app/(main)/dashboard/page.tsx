import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Dashboard() {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return (
    <div className="h-full w-full p-5">
      <div className="flex h-full w-full gap-4">
        <div className="flex-1 h-full">
          <div className="w-full h-full">
            <div className="w-full">
              <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
              <p className="text-gray-500 mb-2">
                Overview of your account and resources.
              </p>
            </div>
            <div className="w-full">
              {/* if account is new: */}
              <Link
                href="/setup"
                className="bg-blue-900 text-white font-bold py-3 px-6 rounded-lg transition-colors hover:bg-gray-800"
              >
                Setup your account
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 justify-center">
          <h1 className="text-3xl font-bold mb-2">Resources</h1>
          <div className="border border-black rounded w-[20rem] h-[15rem]"></div>
          <div className="border border-black rounded w-[20rem] h-[15rem]"></div>
        </div>
      </div>
    </div>
  );
}
