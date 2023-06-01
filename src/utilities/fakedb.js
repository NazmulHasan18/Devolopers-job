// use local storage to manage cart data
const addToDb = (id) => {
   let appliedJob = getAppliedJob();
   let newJob = [...appliedJob, { id: id }];

   localStorage.setItem("appliedJob", JSON.stringify(newJob));
};

const removeFromDb = (id) => {
   const shoppingCart = getAppliedJob();
   if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("appliedJob", JSON.stringify(shoppingCart));
   }
};

const getAppliedJob = () => {
   let appliedJob = [];

   //get the shopping cart from local storage
   const storedJob = localStorage.getItem("appliedJob");
   if (storedJob) {
      appliedJob = JSON.parse(storedJob);
   }
   return appliedJob;
};

const deleteShoppingCart = () => {
   localStorage.removeItem("appliedJob");
   //    localStorage.setItem("shopping-cart", JSON.stringify({}));
};

export { addToDb, removeFromDb, getAppliedJob, deleteShoppingCart };
