let statusRef = document.querySelector(".sub");
let vedioRef = document.querySelector(".video");
function sub() {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{resolve(undefined);},2000)
    
  });
}
function getVideo(subscriptionStatus) {
  return new Promise((resolve, reject) => {
    if (subscriptionStatus === "VIP") {
      resolve("Show video");
    } else if (subscriptionStatus === "FREE") {
      resolve("show trailer");
    } else {
      reject("no video");
    }
  });
}
async function main() {
  let status = await sub();
  statusRef.innerHTML = status;
  try {
    await getVideo(status);
  } catch (e) {
    vedioRef.innerHTML= (e);
  }
  
}
main();
