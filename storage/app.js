const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");

const dbRequest = indexedDB.open("StorageDummy", 1);

let db;

dbRequest.onupgradeneeded = function (event) {
  db = event.target.result;

  const objStore = db.createObjectStore("products", { keyPath: "id" });

  objStore.transaction.oncomplete = function (event) {
    const productStore = db
      .transaction("products", "readwrite")
      .objectStore("products");
    productStore.add({
      id: "p1",
      title: "A First Product",
      price: 12.99,
      tags: ["expensive", "luxury"],
    });
  };
};

dbRequest.onsuccess = function (event) {
  db = event.target.result;
};

dbRequest.onerror = function (event) {
  console.log("ERROR!");
};

storeBtn.addEventListener("click", () => {
  if (!db) {
    return;
  }
  const productStore = db
    .transaction("products", "readwrite")
    .objectStore("products");
  productStore.add({
    id: "p2",
    title: "A Second Product",
    price: 122.99,
    tags: ["expensive", "luxury"],
  });
});

retrieveBtn.addEventListener("click", () => {
  const productStore = db
    .transaction("products", "readwrite")
    .objectStore("products");
  const request = productStore.get("p2");

  request.onsuccess = function () {
    console.log(request.result);
  };
});
