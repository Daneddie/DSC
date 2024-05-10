import { countries } from "country-cities";

export default function FormsIndex() {
  const all_countries = countries.all();

    function handleSubmit(e) {
      e.preventDefault();
    }

  return (
    <main>
        <form className=" p-5" onSubmit={handleSubmit}>
          <div className=" flex flex-col items-start gap-2">
            <label htmlFor="firstname">Firstname</label>
            <input 
              className=" text-[16px] border outline-none rounded-lg border-[#000] p-2 w-[300px] capitalize"
              type="text" name="fistname" id="firstname" />
          </div>

          <div className=" flex flex-col items-start gap-2">
            <label htmlFor="lastname">Lastname</label>
            <input 
              className=" text-[16px] border outline-none rounded-lg border-[#000] p-2 w-[300px] capitalize"
              type="text" name="lastname" id="lastname" />
          </div>

          <div className=" flex flex-col items-start gap-2">
            <label htmlFor="phone">Phone</label>
            <input 
              className=" text-[16px] border outline-none rounded-lg border-[#000] p-2 w-[300px] capitalize"
              type="phone" name="phone" id="phone" />
          </div>

          <div className=" flex flex-col items-start gap-2">
            <label htmlFor="email">Email</label>
            <input 
              className=" text-[16px] border outline-none rounded-lg border-[#000] p-2 w-[300px] capitalize"
              type="email" name="email" id="email" />
          </div>

          <div className=" flex flex-col items-start gap-2">
            <label htmlFor="password">Password</label>
            <input 
              className=" text-[16px] border outline-none rounded-lg border-[#000] p-2 w-[300px] capitalize"
              type="password" name="password" id="password" />
          </div>

          <div className=" flex flex-col items-start gap-2">
            <label htmlFor="country">Country</label>
            <select 
              className=" text-[16px] border outline-none rounded-lg border-[#000] p-2 w-[300px] capitalize"
              type="text" name="country" id="country">
              <option value="">-- select your country --</option>
              {all_countries.map ((country, index) => (
                <option key={index} value= {country.name === "Russia" ? "" : country.name}>{country.name}</option>
              ))}
              </select>
          </div>

          <div className=" flex flex-col items-start gap-2">
            <label htmlFor="state">State</label>
            <input 
              className=" text-[16px] border outline-none rounded-lg border-[#000] p-2 w-[300px] capitalize"
              type="text" name="state" id="state" />
          </div>
        </form>
    </main>
  );
}