/* Api ti get IP info */
function CallApiIp(){
    rRegion = "";
    rIp = "";
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://ipapi.co/json", requestOptions)
      .then(response => response.json())
      .then(result => {
          rRegion = result.city + " " + result.region + ", " + result.country_name + ".";
          rIp = result.ip;
          document.querySelector("#idRegion").innerHTML = rRegion;
          document.querySelector("#idIp").innerHTML = rIp;
      })
      .catch(error => console.log('error', error));
}

CallApiIp();