const button = document.querySelector("button");
const output = document.querySelector("p");

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  });
  return promise;
};

async function trackUserHandler() {
  // let positionData;
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(timerData, posData);
  // .then((posData) => {
  //   positionData = posData;
  //   return setTimer(2000);
  // // })
  // .then((data) => {
  //   console.log(data, positionData);
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
  console.log("code after geolocation fetch");
}

Promise.race([getPosition(), setTimer(1000)]).then(data => {
  console.log(data); //single fastest result, rest is ignored but still runs
});

Promise.all([getPosition(), setTimer(2000)]).then(promiseData => {
  console.log(promiseData); //array of results
})

Promise.allSettled([getPosition(), setTimer(2000)]).then(data => {
  console.log(data);
})

button.addEventListener("click", trackUserHandler);
