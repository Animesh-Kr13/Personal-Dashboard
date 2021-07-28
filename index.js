fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `
        document.getElementById("crypto").innerHTML += `
            <p>🎯: &#8377;${data.market_data.current_price.inr}</p>
            <p>👆: &#8377;${data.market_data.high_24h.inr}</p>
            <p>👇: &#8377;${data.market_data.low_24h.inr}</p>
        `
    })
    .catch(err => console.error(err))


fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto-top-1").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `
        document.getElementById("crypto-1").innerHTML += `
            <p>🎯: &#8377;${data.market_data.current_price.inr}</p>
            <p>👆: &#8377;${data.market_data.high_24h.inr}</p>
            <p>👇: &#8377;${data.market_data.low_24h.inr}</p>
        `
    })
    .catch(err => console.error(err))



fetch("https://api.coingecko.com/api/v3/coins/ethereum")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto-top-2").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `
        document.getElementById("crypto-2").innerHTML += `
            <p>🎯: &#8377;${data.market_data.current_price.inr}</p>
            <p>👆: &#8377;${data.market_data.high_24h.inr}</p>
            <p>👇: &#8377;${data.market_data.low_24h.inr}</p>
        `
    })
    .catch(err => console.error(err))





fetch("https://api.coingecko.com/api/v3/coins/tether")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto-top-3").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `
        document.getElementById("crypto-3").innerHTML += `
            <p>🎯: &#8377;${data.market_data.current_price.inr}</p>
            <p>👆: &#8377;${data.market_data.high_24h.inr}</p>
            <p>👇: &#8377;${data.market_data.low_24h.inr}</p>
        `
    })
    .catch(err => console.error(err))




function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}

setInterval(getCurrentTime, 1000)

navigator.geolocation.getCurrentPosition(position => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p class="weather-temp">${Math.round(data.main.temp)}&#8451;</p>
                <p class="weather-city">${data.name}</p>
            `
        })
        .catch(err => console.error(err))
});
