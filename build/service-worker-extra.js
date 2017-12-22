self.addEventListener("message", evt => {
  /*
  if (evt.data && evt.data.command == "sync-images") {
    let open = indexedDB.open("books", 1);

    open.onsuccess = evt => {
      let db = open.result;
      if (db.objectStoreNames.contains("books")) {
        syncImages(db);
      }
    };
  }
  */
  console.log('message event fired');
});

self.addEventListener("activate", () => {
  console.log('activate event fired');
});

self.addEventListener("install", () => {
  console.log('install event fired');
});