import { getAppliedJob } from "./src/utilities/fakedb";

const loadAppliedJob = async () => {
   const response = await fetch("/featuredJobs.json");
   const jobs = await response.json();

   // console.log(jobs);
   const getStoredJobs = getAppliedJob();
   // //    console.log(storedCart);
   const storedJobs = [];
   for (const id of getStoredJobs) {
      // console.log(id.id);
      const job = jobs.find((pd) => pd.id === id.id);
      if (job) {
         storedJobs.push(job);
      }
   }
   // console.log(storedJobs);
   return storedJobs;
};

export default loadAppliedJob;
