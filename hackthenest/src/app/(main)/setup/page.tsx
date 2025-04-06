export default function SetupAccount() {
  return (
    <div className="h-screen w-full">
      <div className="p-5 w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-2">Setup Account</h1>
        <form className="flex flex-col h-full gap-4 mt-28">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="font-medium text-xl">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-72 px-2 py-1 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="age" className="font-medium text-xl">
              Age
            </label>
            <input
              type="number"
              name="age"
              id="age"
              className="w-72 px-2 py-1 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="gender" className="font-medium text-xl">
              Gender
            </label>
            <div className="flex items-center gap-2">
              <input type="radio" name="gender" value="male" id="male" />
              <label htmlFor="male">Male</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="gender" value="female" id="female" />
              <label htmlFor="female">Female</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="non-binary"
                id="non-binary"
              />
              <label htmlFor="non-binary">Non-binary</label>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="address" className="font-medium text-xl">
              Native Country
            </label>
            <input
              type="text"
              name="country"
              id="country"
              className="w-72 px-2 py-1 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-48 px-3 py-2 bg-blue-500 text-white font-bold rounded-full transition-colors hover:bg-blue-600"
            >
              Setup Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
